'use client';
import { allPackages } from '@/lib/mock-data';
import { useState } from 'react';
import Link from 'next/link';
import { useGetFullPackages } from '@/hooks/use-packages';

export default function Packages() {
  const [sortBy, setSortBy] = useState('name');
  const { data } = useGetFullPackages();
  const allPackages = data?.data || [];
  console.log('All packages data:', allPackages);

  const sorted = [...allPackages].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return a.name.localeCompare(b.name);
  });
  return (
    <>
      <main className="min-h-screen">
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">All Packages</h1>
              <p className="text-lg text-muted-foreground mb-6">Browse all available packages across Egypt</p>

              <div className="flex items-center gap-4">
                <label className="text-foreground font-medium">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-border rounded-lg bg-card text-foreground"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((pkg) => (
                <Link key={pkg.id} href={`/packs/${pkg.id}`}>
                  <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src={pkg.image.url || '/placeholder.svg'}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        ${pkg.price}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-card-foreground mb-1">{pkg.name}</h3>
                      <p className="text-xs text-muted-foreground font-medium mb-3">{pkg.destinationName}</p>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{pkg.description}</p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Duration {pkg.duration}</span>
                        <span>Group Size {pkg.groupSize}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
