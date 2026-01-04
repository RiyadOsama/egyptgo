'use client';
import BookingForm from '@/components/booking-form';
import BookingSummary from '@/components/booking-summary';
import Link from 'next/link';
import { useGetPackageById } from '@/hooks/use-packages';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function BookFormPage() {
  const params = useParams();
  const id = params.id;
  const { data, isLoading, isError } = useGetPackageById(id);
  const packageData = data?.data;
  console.log('Package data in booking summary:', packageData);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <main className="bg-background">
      <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <nav className="mb-3 text-sm text-muted-foreground">
              <Link href="/packs/aswan-1" className="text-primary hover:underline">
                ← Back to Package
              </Link>
            </nav>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="col-span-2">
              <BookingForm packageData={packageData} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
            </div>
            <div className="col-span-1">
              <BookingSummary packageData={packageData} totalPrice={totalPrice} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
