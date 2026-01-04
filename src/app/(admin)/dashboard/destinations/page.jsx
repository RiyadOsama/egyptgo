import Link from 'next/link';
import { Plus } from 'lucide-react';
import DestinationList from '@/components/destination-list';

export default function ManageDestinationsPage() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 w-full">
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
      <DestinationList />
    </div>
  );
}
