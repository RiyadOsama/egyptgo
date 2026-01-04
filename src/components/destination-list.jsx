'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useDeleteDestination, useGetAllDestinations } from '@/hooks/use-destinations';
import Link from 'next/link';
import { Loader2, MapPin } from 'lucide-react';
import DestinationCard from '@/components/destination-card';

export default function DestinationList() {
  const queryClient = useQueryClient();

  const { data: destinationData, isLoading, isError } = useGetAllDestinations();
  const deleteMutation = useDeleteDestination();

  const destinations = destinationData?.data || [];

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this destination?')) return;

    deleteMutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['destinations'] });
      },
      onError: (error) => {
        alert('Error deleting destination. Please try again.');
        console.error(error);
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground animate-pulse">Fetching destinations...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="bg-destructive/10 p-4 rounded-full mb-4">
          <MapPin className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-xl font-semibold">Failed to load destinations</h2>
        <p className="text-muted-foreground">Please check your connection and try again.</p>
      </div>
    );
  }

  return (
    <>
      {destinations.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-muted rounded-3xl bg-muted/5">
          <MapPin className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <h3 className="text-xl font-medium text-muted-foreground">No destinations found</h3>
          <p className="text-muted-foreground mb-6">Your catalog is currently empty.</p>
          <Link
            href="/dashboard/destinations/create-destination"
            className="text-primary font-semibold hover:underline"
          >
            Create your first one now →
          </Link>
        </div>
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
