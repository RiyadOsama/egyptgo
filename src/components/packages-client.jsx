'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import PaginationControls from '@/components/pagination-controls';
import PackageCard from '@/components/package-card';
import { ChevronDown, Package } from 'lucide-react';

export default function PackagesClient({ packages = [], totalPages, currentPage }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedPackages = useMemo(() => {
    if (!packages || packages.length === 0) return [];
    return [...packages].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return a.name.localeCompare(b.name);
    });
  }, [packages, sortBy]);

  return (
    <main className="bg-background">
      <section className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Packages</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">Browse all available packages across Egypt</p>
          </div>
          <div className="w-fit flex items-center gap-3 bg-card p-3 rounded-xl border hover:border-primary/50 transition-all">
            <label className="text-sm font-semibold text-foreground whitespace-nowrap">Sort by:</label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-3 pr-10 py-2 bg-card text-sm font-medium focus:outline-none cursor-pointer"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>

        {sortedPackages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-muted rounded-3xl bg-muted/5">
            <div className="bg-muted/20 p-6 rounded-full mb-6">
              <Package className="h-10 w-10 text-muted-foreground/60" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No packages available</h3>
            <p className="text-muted-foreground text-center max-w-md">
              We don't have any packages to display right now. Please check back later!
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPackages.map((pkg) => (
                <Link key={pkg.id} href={`/packs/${pkg.id}`}>
                  <PackageCard pkg={pkg} />
                </Link>
              ))}
            </div>
            <div className="mt-12">
              <PaginationControls currentPage={currentPage} totalPages={totalPages} />
            </div>
          </>
        )}
      </section>
    </main>
  );
}
