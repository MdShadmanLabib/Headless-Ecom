export function CategoryCardSkeleton() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-border-primary bg-bg-secondary p-6">
      <div className="skeleton h-16 w-16 rounded-lg" />
      <div className="skeleton h-4 w-24" />
      <div className="skeleton h-3 w-16" />
    </div>
  );
}
