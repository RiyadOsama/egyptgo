'use client';

import { useDeleteDestination, useGetAllDestinations } from '@/hooks/use-destinations';
import Link from 'next/link';
import DestinationCard from '@/components/destination-card';
import LoadingSpinner from '@/components/loading-spinner';
import EmptyState from '@/components/empty-state';
import ErrorState from '@/components/error-state';
import CardSkeleton from '@/components/card-skeleton';
import { MapPin } from 'lucide-react';

export default function DestinationList() {
  const { data: destinationData, isLoading, isError, refetch } = useGetAllDestinations();
  const deleteMutation = useDeleteDestination();

  const destinations = destinationData?.data || [];

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
        title="Failed to load destinations"
        message="We couldn't fetch your destinations. Please check your connection and try again."
        icon={MapPin}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <>
      {destinations.length === 0 ? (
        <EmptyState
          title="No destinations yet"
          message="Your destination catalog is empty. Create your first destination to get started!"
          icon={MapPin}
          actionLabel="Create your first destination"
          actionHref="/dashboard/destinations/create-destination"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} onDelete={handleDelete} showActions />
          ))}
        </div>
      )}
    </>
  );
}
