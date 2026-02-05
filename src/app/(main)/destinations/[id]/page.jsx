'use client';
import AvailablePackageCard from '@/components/avilable-pakage-card';
import ErrorState from '@/components/error-state';
import DetailSkeleton from '@/components/detail-skeleton';
import Image from 'next/image';
import Link from 'next/link';
import { useGetDestinationById } from '@/hooks/use-destinations';
import { useParams } from 'next/navigation';
import { MapPin } from 'lucide-react';

export default function DestinationDetailPage() {
  const params = useParams();
  const {
    data: destinationData,
    isLoading: isDestinationLoading,
    isError: isDestinationError,
    refetch,
  } = useGetDestinationById(params.id);
  const destination = destinationData?.data || {};

  if (isDestinationLoading) {
    return <DetailSkeleton />;
  }

  if (isDestinationError) {
    return (
      <main className="bg-background">
        <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
          <ErrorState
            title="Failed to load destination"
            message="We couldn't load the destination details. Please check your connection and try again."
            icon={MapPin}
            onRetry={() => refetch()}
          />
        </section>
      </main>
    );
  }

  console.log('Destination data in detail page:', destinationData);
  return (
    <main className="bg-background">
      <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link href="/destinations" className="text-primary hover:underline mb-6 inline-block">
              ← Back to Destinations
            </Link>

            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              {destination?.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{destination.description}</p>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden shadow-lg relative">
            {destination.image?.url && (
              <Image
                src={destination?.image.url}
                alt={destination.name}
                width={1280}
                height={720}
                className="w-full h-96 object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 gap-4">
              <h2 className="text-3xl font-bold text-foreground">Available Packages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AvailablePackageCard destinationId={params.id} destinationImage={destination.image?.url} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
