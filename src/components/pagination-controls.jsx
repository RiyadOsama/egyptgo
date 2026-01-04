'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PaginationControls({ currentPage, totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center gap-6 py-4">
      {/* Previous Button */}
      <Link
        href={createPageURL(currentPage - 1)}
        scroll={false}
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors border shadow-sm
          ${
            currentPage <= 1
              ? 'pointer-events-none opacity-50 bg-muted text-muted-foreground border-border'
              : 'bg-card text-card-foreground border-border hover:bg-accent hover:text-accent-foreground'
          }`}
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Link>

      {/* Page Indicator */}
      <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
        <span className="flex h-8 w-8 items-center justify-center rounded-md text-destructive">{currentPage}</span>
        <span className="px-1">of</span>
        <span className="flex h-8 w-8 items-center justify-center">{totalPages}</span>
      </div>

      {/* Next Button */}
      <Link
        href={createPageURL(currentPage + 1)}
        scroll={false}
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors border shadow-sm
          ${
            currentPage >= totalPages
              ? 'pointer-events-none opacity-50 bg-muted text-muted-foreground border-border'
              : 'bg-card text-card-foreground border-border hover:bg-accent hover:text-accent-foreground'
          }`}
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
