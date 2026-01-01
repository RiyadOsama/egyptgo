'use client';
import { useGetAllPackages } from "@/hooks/use-packages";
import Image from "next/image";
import Link from "next/link";

export default function AvailablePackageCard({destinationId, destinationImage}) {
  const { data:packagesData, isLoading, isError } = useGetAllPackages(destinationId);
  const packages = packagesData?.data || [];
  console.log("Packages data in available package card:", packages);
  return (
    <>
    {packages.map((pkg)=>(
      <div
        key={pkg.id}
        role="button"
        tabIndex={0}
        className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group h-full"
      >
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={pkg.image.url}
            alt="Package Image"
            fill
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
          <p className="text-foreground text-sm mb-4 line-clamp-2">{pkg.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">{pkg.duration} days</span>
            <span className="text-primary font-bold text-lg">price ${pkg.price}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            <p className="mb-2">Group Size {pkg.groupSize}</p>
            <Link href={`/packs/${pkg.id}`}>
              <p className="text-primary font-semibold">View Details →</p>
            </Link>
          </div>
        </div>
      </div>
    ))}
    </>
  );
}
