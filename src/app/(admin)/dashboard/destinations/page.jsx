'use client';
import DestinationCard from "@/components/destination-card";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useGetAllDestinations } from "@/hooks/use-destinations";

export default function ManageDestinationsPage() {
  const { isLoading, isError } = useGetAllDestinations();
  
  if(isLoading){
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading destinations...</p>
      </div>
    );
  }
  
  if(isError){
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-destructive">Error loading destinations.</p>
      </div>
    );
  }
  
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-6">Manage Destinations</h1>
          <p className="mb-4">Here you can add, edit, or remove travel destinations.</p>
        </div>
        <div className="w-fit">
          <Link
            href="/dashboard/destinations/create-destination"
            className="bg-primary text-primary-foreground hover:opacity-90 hover:text-primary-foreground font-semibold rounded-lg py-2 px-4 flex items-center"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create
          </Link>
        </div>
      </div>
      <div className="py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DestinationCard show />
      </div>
    </div>
  );
}
