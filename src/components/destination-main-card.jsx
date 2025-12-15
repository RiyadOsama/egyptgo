import Link from "next/link";

import Image from "next/image";

export function DestinationMainCard() {
  return (
    <Link href="/destinations/1">
      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group h-full">
        <div className="relative h-80 overflow-hidden bg-muted">
          <Image
            src="/imgs/destinations/aswan-nile-sunset-egypt.jpg"
            alt="Aswan"
            fill
            className="object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
        <div className="p-6 bg-white">
          <h2 className="text-2xl font-bold text-card-(foreground) mb-3">Aswan</h2>
          <p className="text-muted-(foreground) mb-4">
            Experience the beauty of the Nile with golden sunsets and ancient temples.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-(foreground)">3 packages</span>
            <span className="text-primary font-bold text-lg text-red-500">From $599</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
