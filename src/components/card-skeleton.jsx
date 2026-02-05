import { Skeleton } from './ui/skeleton';

export default function CardSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm border border-border bg-card animate-pulse">
      {/* Image skeleton */}
      <Skeleton className="w-full h-48 rounded-none" />

      {/* Content skeleton */}
      <div className="p-5 flex flex-col space-y-4">
        {/* Title skeleton */}
        <Skeleton className="h-6 w-3/4 rounded" />

        {/* Subtitle skeleton */}
        <Skeleton className="h-4 w-1/2 rounded" />

        {/* Meta info skeleton */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-5 w-16 rounded" />
        </div>

        {/* Description skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-full rounded" />
          <Skeleton className="h-3 w-5/6 rounded" />
        </div>
      </div>
    </div>
  );
}
