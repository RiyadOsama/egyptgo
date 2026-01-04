import ReservationCard from '@/components/reservation-card';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b pb-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Reservations</h1>
          <p className="text-lg text-muted-foreground mt-2">Manage All Customer Bookings And Reservations Here.</p>
        </div>
      </div>
      <ReservationCard />
    </div>
  );
}
