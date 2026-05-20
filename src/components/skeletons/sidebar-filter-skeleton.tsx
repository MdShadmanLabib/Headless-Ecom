export function SidebarFilterSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <div className="skeleton h-4 w-24" />
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, j) => (
              <div key={j} className="flex items-center gap-2">
                <div className="skeleton h-4 w-4 rounded" />
                <div className="skeleton h-3 w-20" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
