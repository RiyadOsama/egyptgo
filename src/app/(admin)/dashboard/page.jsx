import ReservationCard from '@/components/reservation-card';
// const reservations = [
//   {
//     id: 1,
//     name: "John Doe",
//     date: "2024-07-15",
//     guests: 4,
//     contact: "+20123456789",
//     total: "$2000",
//     booked_on: "2024-06-20",
//     email: "john.doe@example.com",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     date: "2024-08-10",
//     guests: 2,
//     contact: "+20222456789",
//     total: "$3500",
//     booked_on: "2024-06-20",
//     email: "jane.smith@example.com",
//   },
//   {
//     id: 3,
//     name: "mohamed ali",
//     date: "2024-09-05",
//     guests: 1,
//     contact: "+20333456789",
//     total: "$1500",
//     booked_on: "2024-07-01",
//     email: "mohamed.ali@example.com",
//   },
// ];
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
