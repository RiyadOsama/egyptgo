'use client'
import Image from "next/image";
import Link from "next/link";
import { Edit, Delete } from "lucide-react";
import { useGetAllDestinations } from "@/hooks/use-destinations";
import { useDeleteDestination } from "@/hooks/use-destinations";

export default function DestinationCard({ show = false }) {
  const { data, isLoading, isError } = useGetAllDestinations();
  console.log("Destinations data in card:", data);
  const deleteDestinationMutation = useDeleteDestination();
  
  const destinations = data?.data || [];

  const deleteDestinationHandler = (id) => {
    deleteDestinationMutation.mutate(id);
  }
  
  return (
    <>
    {destinations.map((destination) => (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-card"
    key={destination._id}>
          <Image
            src={destination?.image.url}
            width={400}
            height={300}
            alt="Cairo"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 mt-4">
            <h3 className="text-xl font-semibold mb-2">{destination?.name}</h3>
            <p className="text-muted-foreground mb-4">
              {destination?.description}
            </p>
            <p className="text-muted-foreground mb-4">middle of Egypt</p>
          </div>
      {show && (
        <div className="flex w-full justify-between">
          <Link
            href={`/dashboard/destinations/edit-destination/${destination._id}`}
            className="bg-card text-card-foreground hover:opacity-90 px-1 py-1 transition duration-300 rounded-md mx-4 mb-4 flex items-center border w-[100px] justify-center"
          >
            <Edit className="mr-3 h-4 w-4" />
            Edit
          </Link>
          <button type="submit" onClick={()=>deleteDestinationHandler(destination._id)} className="cursor-pointer px-2 py-1 transition duration-300 rounded-md text-card-foreground hover:opacity-90 mx-4 mb-4 border flex items-center w-[100px] justify-center">
            <Delete className="mr-3 h-4 w-4 text-destructive" />
            Delete
          </button>
        </div>
      )}
    </div>
    ))}
    </>
  );
}
