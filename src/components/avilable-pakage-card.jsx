import Image from "next/image";

export default function AvailablePackageCard({
  title = "Package Title",
  description = "Short description of the package.",
  duration = "1 day",
  price = "$0",
  image = "/imgs/destinations/aswan-nile-sunset-egypt.jpg",
  groupSize = "Up to 10 people",
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group h-full bg-white"
    >
      <div className="relative h-64 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-(--foreground) mb-2">{title}</h3>
        <p className="text-(--foreground) text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-muted-(--foreground)">{duration}</span>
          <span className="text-primary font-bold text-lg text-red-500">{price}</span>
        </div>
        <div className="text-xs text-muted-(--foreground)">
          <p className="mb-2">{groupSize}</p>
          <p className="text-primary font-semibold text-red-500">View Details →</p>
        </div>
      </div>
    </div>
  );
}
