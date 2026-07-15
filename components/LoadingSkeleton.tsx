import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  className?: string;
  count?: number;
}

export function LoadingSkeleton({ className, count = 1 }: LoadingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "animate-pulse bg-sand/70",
            className ?? "aspect-[3/4] w-full"
          )}
          aria-hidden
        />
      ))}
    </>
  );
}

export function ProductGridSkeleton() {
  return (
    <div
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
      role="status"
      aria-label="Loading products"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <LoadingSkeleton className="aspect-[3/4] w-full" />
          <LoadingSkeleton className="h-3 w-1/3" />
          <LoadingSkeleton className="h-5 w-3/4" />
          <LoadingSkeleton className="h-3 w-1/4" />
        </div>
      ))}
    </div>
  );
}
