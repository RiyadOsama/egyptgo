'use client'
import Link from "next/link";
import Image from "next/image";
import { useGetAllDestinations } from "@/hooks/use-destinations";

export function DestinationMainCard() {
  const { data, isLoading, isError } = useGetAllDestinations();
  const destinations = data?.data || [];
  console.log("Destinations data in main card:", destinations);

  if(isLoading){
    return (
      <div className="min-h-screen flex items-center justify-center">
      <p>Loading...</p>
      </div>
    );
  }

  if(isError){
    return (
      <div className="min-h-screen flex items-center justify-center">
      <p>Error loading destinations.</p>
      </div>
    )
  }

  return (
    <>
      {destinations.map((destination)=>(
        <Link href={`/destinations/${destination._id}`} key={destination._id}>
          <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group h-full">
            <div className="relative h-80 overflow-hidden bg-muted">
              <Image
                src={destination?.image.url}
                alt={destination?.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="p-6 bg-card">
              <h2 className="text-2xl font-bold text-card-foreground mb-3">{destination?.name}</h2>
              <p className="text-muted-foreground mb-4">
                {destination?.description}.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">3 packages</span>
                <span className="text-primary font-bold text-lg">From $599</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
