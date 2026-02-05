'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function DetailSkeleton() {
  return (
    <main className="bg-background">
      <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb skeleton */}
          <div className="mb-8">
            <Skeleton className="h-4 w-48 mb-4 rounded" />
            <Skeleton className="h-10 w-3/4 mb-4 rounded" />
            <Skeleton className="h-6 w-full rounded" />
          </div>

          {/* Image skeleton */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <Skeleton className="w-full h-96 rounded-lg" />
          </div>

          {/* Content grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {/* Meta info skeleton */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-20 mb-2 rounded" />
                    <Skeleton className="h-6 w-24 rounded" />
                  </div>
                ))}
              </div>

              {/* Description skeleton */}
              <div className="space-y-4">
                <Skeleton className="h-6 w-40 rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-3/4 rounded" />
              </div>

              {/* Features skeleton */}
              <div className="space-y-3">
                <Skeleton className="h-6 w-32 rounded" />
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full rounded" />
                ))}
              </div>
            </div>

            {/* Sidebar skeleton */}
            <div className="bg-muted/50 rounded-lg p-8 h-fit space-y-6">
              <div>
                <Skeleton className="h-4 w-20 mb-2 rounded" />
                <Skeleton className="h-10 w-full rounded" />
              </div>
              <Skeleton className="h-12 w-full rounded" />
              <Skeleton className="h-12 w-full rounded" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
