import { DestinationMainCard } from "@/components/destination-main-card";

export default function DestinationsPage() {
  return (
    <main className="bg-(--background)">
      <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8 ">
        <div>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Destinations
            </h1>
            <p className="text-lg text-muted-(--foreground) max-w-2xl">
              Explore all of Egypt's incredible destinations and find your
              perfect getaway
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DestinationMainCard />
          <DestinationMainCard />
          <DestinationMainCard />
          <DestinationMainCard />
        </div>
      </section>
    </main>
  );
}
