import { cn } from "@/lib/utils";

export function DataTable({ headers, rows, className }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border/50 shadow-sm bg-card", className)}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted/50 border-b border-border/50">
              {headers.map((header, i) => (
                <th 
                  key={i} 
                  className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground first:rounded-tl-xl last:rounded-tr-xl"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {rows.map((row, i) => (
              <tr 
                key={i} 
                className="transition-colors duration-150 hover:bg-muted/30"
              >
                {row.map((cell, j) => (
                  <td 
                    key={j} 
                    className="px-5 py-4 text-sm text-foreground"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
