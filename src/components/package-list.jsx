'use client';

import Link from 'next/link';
import { useDeletePackage, useGetFullPackages } from '@/hooks/use-packages';
import PackageCard from './package-card';
import LoadingSpinner from '@/components/loading-spinner';
import EmptyState from '@/components/empty-state';
import ErrorState from '@/components/error-state';
import CardSkeleton from '@/components/card-skeleton';
import { Package as PackageIcon, AlertCircle } from 'lucide-react';

export default function PackageList() {
  const { data: packageData, isLoading, isError, refetch } = useGetFullPackages();
  const deleteMutation = useDeletePackage();

  const packages = packageData?.data || [];

  const handleDelete = async (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Failed to load packages"
        message="We couldn't fetch your packages. Please check your connection and try again."
        icon={AlertCircle}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <>
      {packages.length === 0 ? (
        <EmptyState
          title="No packages yet"
          message="Your package catalog is empty. Create your first package to get started!"
          icon={PackageIcon}
          actionLabel="Create your first package"
          actionHref="/dashboard/packs/create-package"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onDelete={handleDelete}
              showActions
              isDeleting={deleteMutation.isPending}
            />
          ))}
        </div>
      )}
    </>
  );
}
