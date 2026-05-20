export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-primary bg-bg-secondary">
      <div className="skeleton aspect-square w-full" />
      <div className="space-y-3 p-4">
        <div className="skeleton h-3 w-3/4" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-2/3" />
        <div className="flex items-center justify-between pt-2">
          <div className="skeleton h-5 w-24" />
          <div className="skeleton h-8 w-20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
