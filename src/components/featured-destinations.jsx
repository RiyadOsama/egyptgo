import DestinationCard from './destination-card';

export default function FeaturedDestinations() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
      <p className="text-center mb-8">Explore our most popular Egyptian destinations with carefully curated packages</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <DestinationCard />
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-primary mt-8 text-lg text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition duration-300 cursor-pointer">
          View All Destinations
        </button>
      </div>
    </section>
  );
}
