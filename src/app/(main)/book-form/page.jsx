import BookingForm from "@/components/booking-form";
import Link from "next/link";

export default function BookFormPage() {
  return (
    <main className="bg-background">
      <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <nav className="mb-3 text-sm text-muted-(--foreground)">
              <Link href="/packs/1" className="text-red-500 hover:underline">
                ← Back to Package
              </Link>
            </nav>
          </div>

          <div>
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
