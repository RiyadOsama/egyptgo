'use client';

import Link from 'next/link';
import { Plus, Loader2, MapPin } from 'lucide-react';
import DestinationCard from '@/components/destination-card';
import { useDeleteDestination, useGetAllDestinations } from '@/hooks/use-destinations';

export default function ManageDestinationsPage() {

  const { data: destinationData, isLoading, isError } = useGetAllDestinations();
  const deleteMutation = useDeleteDestination();

  const destinations = destinationData?.data || [];

  const handleDelete = async (id) => {
    deleteMutation.mutate(id);
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
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b pb-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Manage Destinations</h1>
          <p className="text-lg text-muted-foreground mt-2">View, edit, and organize your travel catalog.</p>
        </div>
        <Link
          href="/dashboard/destinations/create-destination"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold shadow-sm hover:opacity-90 transition-all active:scale-95"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add Destination
        </Link>
      </div>

      {/* Grid or Empty State */}
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
    </div>
  );
}
