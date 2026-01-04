import ReservationCard from '@/components/reservation-card';

export default function DashboardPage() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Reservations</h1>
      <p>Manage All Customer Bookings And Reservations Here</p>
      <div className="mt-6">
        <ReservationCard />
      </div>
    </div>
  );
}
