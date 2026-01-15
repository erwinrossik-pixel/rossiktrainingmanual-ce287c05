import { useState, useEffect, useRef } from "react";
import { Search, X, FileText, ArrowRight, Command } from "lucide-react";
import { searchContent, SearchableItem } from "@/data/searchableContent";
import { cn } from "@/lib/utils";

interface GlobalSearchProps {
  onNavigate: (chapterId: string) => void;
  variant?: 'light' | 'dark';
}

export function GlobalSearch({ onNavigate, variant = 'dark' }: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchableItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Search on query change
  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchContent(query);
      setResults(searchResults);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search with Ctrl/Cmd + K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      
      // Close with Escape
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle result navigation with arrow keys
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      handleSelect(results[selectedIndex]);
    }
  };

  const handleSelect = (item: SearchableItem) => {
    onNavigate(item.chapterId);
    setIsOpen(false);
    setQuery("");
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      {/* Search Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        className="flex items-center gap-3 px-4 py-2.5 bg-sidebar-accent/30 hover:bg-sidebar-accent/50 rounded-xl text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground transition-all duration-200 w-full group"
      >
        <Search className="w-4 h-4" />
        <span className="flex-1 text-left">Search manual...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-sidebar-muted/50 rounded-lg text-[10px] font-medium group-hover:bg-sidebar-muted transition-colors">
          <Command className="w-3 h-3" />
          <span>K</span>
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm animate-fade-in" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Search Panel */}
          <div className="relative w-full max-w-xl mx-4 bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
            {/* Search Input */}
            <div className="flex items-center gap-4 p-5 border-b border-border/50">
              <Search className="w-5 h-5 text-primary" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search chapters, topics, keywords..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-base"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1.5 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto scrollbar-thin">
              {query.length < 2 ? (
                <div className="p-8 text-center">
                  <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Type at least 2 characters to search
                  </p>
                </div>
              ) : results.length === 0 ? (
                <div className="p-8 text-center">
                  <FileText className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    No results found for "<span className="font-medium text-foreground">{query}</span>"
                  </p>
                </div>
              ) : (
                <ul className="py-2">
                  {results.map((item, index) => (
                    <li key={`${item.chapterId}-${item.section}-${index}`}>
                      <button
                        onClick={() => handleSelect(item)}
                        className={cn(
                          "w-full px-5 py-4 text-left flex items-start gap-4 transition-all duration-150",
                          selectedIndex === index 
                            ? "bg-primary/5 border-l-2 border-primary" 
                            : "hover:bg-muted/50 border-l-2 border-transparent"
                        )}
                      >
                        <FileText className={cn(
                          "w-5 h-5 mt-0.5 flex-shrink-0 transition-colors",
                          selectedIndex === index ? "text-primary" : "text-muted-foreground"
                        )} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-foreground">{item.chapterTitle}</span>
                            <ArrowRight className="w-3 h-3 text-muted-foreground" />
                            <span className="text-sm text-primary font-medium">{item.section}</span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                            {highlightMatch(item.content, query)}
                          </p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-border/50 bg-muted/30 text-xs text-muted-foreground">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-muted rounded-lg font-medium">↑↓</kbd>
                  <span>navigate</span>
                </span>
                <span className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-muted rounded-lg font-medium">↵</kbd>
                  <span>select</span>
                </span>
              </div>
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded-lg font-medium">esc</kbd>
                <span>close</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper to highlight matching text
function highlightMatch(text: string, query: string): React.ReactNode {
  const queryWords = query.toLowerCase().split(/\s+/);
  let result = text;
  
  // Simple highlighting - just return the text for now
  // More complex highlighting could be added
  return result;
}
