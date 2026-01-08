// ISR

import Link from 'next/link';
import DestinationCard from './destination-card';

export default async function FeaturedDestinations() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/destinations`, {
    next: { revalidate: 86400 }, // Refresh data every 24 hours
    tags: ['destinations-list'], // Allow actions on the homepage to be reflected on the dashboard.
  });
  const json = await res.json();
  const destinations = json?.data?.slice(0, 3) || [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
      <p className="text-center mb-8">Explore our most popular Egyptian destinations with carefully curated packages</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.length === 0 ? (
          <p className="col-span-full text-center py-10">No destinations found at this time.</p>
        ) : (
          destinations.map((destination) => <DestinationCard key={destination._id} destination={destination} />)
        )}
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/destinations"
          className="bg-primary mt-8 text-lg text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition duration-300 cursor-pointer"
        >
          View All Destinations
        </Link>
      </div>
    </section>
  );
}
