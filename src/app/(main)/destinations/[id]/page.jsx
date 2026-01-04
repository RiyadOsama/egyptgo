'use client';
import AvailablePackageCard from '@/components/avilable-pakage-card';
import Image from 'next/image';
import Link from 'next/link';
import { useGetDestinationById } from '@/hooks/use-destinations';
import { useParams } from 'next/navigation';

export default function DestinationDetailPage() {
  const params = useParams();
  // const { id } = params;
  const {
    data: destinationData,
    isLoading: isDestinationLoading,
    isError: isDestinationError,
  } = useGetDestinationById(params.id);
  const destination = destinationData?.data || {};

  if (isDestinationLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }
  if (isDestinationError) {
    return <div className="text-center py-20">Error loading destination details.</div>;
  }
  console.log('Destination data in detail page:', destinationData);
  return (
    <main className="bg-background">
      <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <nav className="mb-3 text-sm text-muted-foreground">
              <Link href="/destinations" className="text-primary hover:underline">
                Destinations
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground font-semibold">{destination.name}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              {destination?.name}
            </h1>
            <p className="text-lg text-muted-(--foreground) max-w-3xl">{destination.description}</p>
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
            <div className="absolute bottom-4 left-4 text-primary-foreground pointer-events-none">
              <h3 className="text-lg font-semibold drop-shadow">Nile Sunset — {destination?.name}</h3>
              <p className="text-sm opacity-90 drop-shadow">Golden hour views and traditional felucca rides</p>
            </div>
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
