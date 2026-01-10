import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-primary to-primary">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
          Ready for Your Egyptian Adventure?
        </h2>
        <p className="text-lg text-primary-foreground max-w-2xl mx-auto">
          Browse our curated packages and start planning your trip to the land of pharaohs
        </p>
        <Link
          href="/packs"
          className="inline-block bg-card text-primary font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition mt-6"
        >
          Browse Packages Now
        </Link>
      </div>
    </section>
  );
}
