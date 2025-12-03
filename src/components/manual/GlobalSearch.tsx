import { useState, useEffect, useRef } from "react";
import { Search, X, FileText, ArrowRight } from "lucide-react";
import { searchContent, SearchableItem } from "@/data/searchableContent";
import { cn } from "@/lib/utils";

interface GlobalSearchProps {
  onNavigate: (chapterId: string) => void;
}

export function GlobalSearch({ onNavigate }: GlobalSearchProps) {
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
        className="flex items-center gap-2 px-3 py-2 bg-sidebar-accent/50 hover:bg-sidebar-accent rounded-lg text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors w-full"
      >
        <Search className="w-4 h-4" />
        <span className="flex-1 text-left">Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 bg-sidebar-border rounded text-xs">
          <span>⌘</span>K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          {/* Search Panel */}
          <div className="relative w-full max-w-lg mx-4 bg-card border border-border rounded-xl shadow-elevated overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search manual content..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 hover:bg-muted rounded"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query.length < 2 ? (
                <div className="p-4 text-center text-muted-foreground text-sm">
                  Type at least 2 characters to search
                </div>
              ) : results.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground text-sm">
                  No results found for "{query}"
                </div>
              ) : (
                <ul className="py-2">
                  {results.map((item, index) => (
                    <li key={`${item.chapterId}-${item.section}-${index}`}>
                      <button
                        onClick={() => handleSelect(item)}
                        className={cn(
                          "w-full px-4 py-3 text-left flex items-start gap-3 transition-colors",
                          selectedIndex === index ? "bg-muted" : "hover:bg-muted/50"
                        )}
                      >
                        <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-foreground">{item.chapterTitle}</span>
                            <ArrowRight className="w-3 h-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{item.section}</span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
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
            <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-muted/30 text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded">↑↓</kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded">↵</kbd>
                  select
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded">esc</kbd>
                close
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
