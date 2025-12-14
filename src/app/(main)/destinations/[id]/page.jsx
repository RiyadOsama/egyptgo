import AvailablePackageCard from "@/components/avilable-pakage-card";
import Image from "next/image";
import Link from "next/link";

export default function DestinationDetailPage() {
  return (
    <main className="bg-(--background)">
      <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <nav className="mb-3 text-sm text-muted-(--foreground)">
              <Link href="/destinations" className="text-red-500 hover:underline">
                Destinations
              </Link>
              <span className="mx-2">/</span>
              <span className="text-(--foreground) font-semibold">Aswan</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-extrabold text-(--foreground) mb-4 tracking-tight">Aswan</h1>
            <p className="text-lg text-muted-(--foreground) max-w-3xl">
              Experience the beauty of the Nile with golden sunsets and ancient temples.
            </p>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden shadow-lg relative">
            <Image
              src="/imgs/destinations/aswan-nile-sunset-egypt.jpg"
              alt="Aswan"
              width={1200}
              height={720}
              className="w-full h-96 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 text-white pointer-events-none">
              <h3 className="text-lg font-semibold drop-shadow">Nile Sunset — Aswan</h3>
              <p className="text-sm opacity-90 drop-shadow">Golden hour views and traditional felucca rides</p>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 gap-4">
              <h2 className="text-3xl font-bold text-(--foreground)">Available Packages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AvailablePackageCard />
              <AvailablePackageCard />
              <AvailablePackageCard />
              <AvailablePackageCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
