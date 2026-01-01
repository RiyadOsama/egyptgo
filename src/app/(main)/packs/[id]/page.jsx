"use client";
import { allPackages } from "@/lib/mock-data";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { useGetPackageById } from "@/hooks/use-packages";

export default function PackageDetailPage() {
  const params = useParams();
  const { data, isLoading, isError } = useGetPackageById(params.id);
  const packageData = data?.data;
  console.log("Package data in detail page:", packageData);
  const router = useRouter();
  // const pkg = allPackages.find((p) => p.id === params.id);

  if (isLoading) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </>
    );}
  if (isError || !packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error loading package details.</p>
      </div>
    )
  }

  return (
    <>
      <main className="min-h-screen">
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <Link href="/packs" className="text-primary hover:underline mb-6 inline-block">
              ← Back to Packages
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Image
                  src={packageData.image.url}
                  alt={packageData.name}
                  width={400}
                  height={384}
                  className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
                />

                <div className="bg-card rounded-lg p-8 shadow-md mb-8">
                  <h1 className="text-4xl font-bold text-card-foreground mb-2">{packageData.name}</h1>
                  {/* <p className="text-muted-foreground text-lg mb-6">{packageData.destinationName}</p> */}

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 pb-8 border-b border-border">
                    <div>
                      <p className="text-muted-foreground text-sm">Duration</p>
                      <p className="font-semibold text-foreground">{packageData.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Group Size</p>
                      <p className="font-semibold text-foreground">{packageData.groupSize}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Price</p>
                      <p className="font-semibold text-primary text-lg">${packageData.price}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground mb-4">About This Package</h2>
                    <p className="text-muted-foreground mb-6">{packageData.description}</p>

                    <h3 className="text-xl font-bold text-card-foreground mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {packageData.included.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check className="text-primary" size={20} />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-linear-to-r from-primary via-accent to-primary rounded-lg p-8 text-primary-foreground sticky top-24">
                  <div className="mb-8">
                    <p className="text-sm opacity-90 mb-2">Total Price</p>
                    <p className="text-4xl font-bold">${packageData.price}</p>
                    <p className="text-sm opacity-80 mt-1">per person</p>
                  </div>

                  <Link href={`/book-form/${packageData.id}`}>
                    <button className="w-full bg-card text-primary font-bold py-3 rounded-lg hover:shadow-lg transition mb-4">
                      Book Now
                    </button>
                  </Link>

                  <button
                    onClick={() => router.back()}
                    className="w-full border-2 border-card text-card-foreground font-semibold py-3 rounded-lg hover:bg-muted transition"
                  >
                    View Other Packages
                  </button>

                  <div className="mt-8 pt-8 border-t border-white/20 text-sm space-y-3">
                    <p className="font-semibold">Flexible booking</p>
                    <p className="opacity-90">Free cancellation up to 7 days before departure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
