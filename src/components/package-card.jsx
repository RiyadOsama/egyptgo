'use client';
import Image from "next/image";
import img from "../../public/istockphoto-466090186-612x612.jpg";
import Link from "next/link";
import { Edit, Delete, Calendar } from "lucide-react";
import { useGetFullPackages } from "@/hooks/use-packages";
import { useDeletePackage } from "@/hooks/use-packages";

export default function PackageCard({ show = false }) {
    const { data , isLoading, isError } = useGetFullPackages();
    const deletePackageMutation = useDeletePackage();
    const allPackages = data?.data || [];
    console.log("All packages data:", allPackages);
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
            <p>Error loading Packages.</p>
            </div>
        )
      }
      const deletePackageHandler = (id)=>{
        deletePackageMutation.mutate(id);
      }
  return (
    <>
    {allPackages.map((pkg)=>(
      <div key={pkg.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-card">
        <Image
          src={pkg.image.url}
          width={400}
          height={300}
          alt={pkg.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
          <p className="text-muted-foreground mb-4 ">{pkg.destinationName}</p>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <Calendar className="ml-2 h-4 w-4 text-muted-foreground" />
            <p className="ml-2">{pkg.duration} Days</p>
          </div>
          <p className="px-4 py-2 text-primary">${pkg.price}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-4 p-4">
            {pkg.description}
          </p>
        </div>
        {show && (
          <div className="flex w-full justify-between">
            <Link
              href={`/dashboard/packs/edit-package/${pkg.id}`}
              className="bg-card text-card-foreground hover:opacity-90 px-1 py-1 transition duration-300 rounded-md mx-4 mb-4 flex items-center border w-[100px] justify-center"
            >
              <Edit className="mr-3 h-4 w-4" />
              Edit
            </Link>
            <button type="submit" onClick={()=>deletePackageHandler(pkg.id)} className="cursor-pointer px-2 py-1 transition duration-300 rounded-md text-card-foreground hover:opacity-90 mx-4 mb-4 border flex items-center w-[100px] justify-center">
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
