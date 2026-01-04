import DestinationCard from '@/components/destination-card';
import PaginationControls from '@/components/pagination-controls';
import getDestinations from '@/lib/get-destinations';

export default async function DestinationsPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;
  const { destinations, totalPages } = await getDestinations(currentPage, 3);

  return (
    <main className="bg-background">
      <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Destinations</h1>
            <p className="text-lg text-muted-(--foreground) max-w-2xl">
              Explore all of Egypt's incredible destinations and find your perfect getaway
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations?.length === 0 ? (
            <p className="col-span-full text-center py-10">No destinations found at this time.</p>
          ) : (
            destinations?.map((destination) => <DestinationCard key={destination._id} destination={destination} />)
          )}
        </div>
        <div className="mt-12">
          <PaginationControls currentPage={currentPage} totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
}
