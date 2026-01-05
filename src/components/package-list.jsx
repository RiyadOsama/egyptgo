'use client';

import Link from 'next/link';
import { Loader2, MapPin } from 'lucide-react';
import { useDeletePackage, useGetFullPackages } from '@/hooks/use-packages';
import PackageCard from './package-card';

export default function PackageList() {

  const { data: packageData, isLoading, isError } = useGetFullPackages();
  const deleteMutation = useDeletePackage();

  const packages = packageData?.data || [];

  const handleDelete = async (id) => {

    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground animate-pulse">Fetching packages...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="bg-destructive/10 p-4 rounded-full mb-4">
          <MapPin className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-xl font-semibold">Failed to load packages</h2>
        <p className="text-muted-foreground">Please check your connection and try again.</p>
      </div>
    );
  }

  return (
    <>
      {packages.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-muted rounded-3xl bg-muted/5">
          <MapPin className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <h3 className="text-xl font-medium text-muted-foreground">No packages found</h3>
          <p className="text-muted-foreground mb-6">Your catalog is currently empty.</p>
          <Link href="/dashboard/packs/create-package" className="text-primary font-semibold hover:underline">
            Create your first one now →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg._id || pkg.id} pkg={pkg} onDelete={handleDelete} showActions />
          ))}
        </div>
      )}
    </>
  );
}
