export default function ReservationCard({ reservation }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm mb-4 bg-white">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-2">Reservation for {reservation.name}</h2>
            <div className="py-1 px-2 bg-orange-600 rounded-md">
                <p className="text-white">Confirmed</p>
            </div>
        </div>
        <p className="mb-1"><strong>Date:</strong> {reservation.date}</p>
        <p className="mb-1"><strong>Booked on:</strong> {reservation.booked_on}</p>
      <p className="mb-1"><strong>Guests:</strong> {reservation.guests}</p>
      <p className="mb-1"><strong>Contact:</strong> {reservation.contact}</p>
      <p className="mb-1"><strong>Total:</strong> {reservation.total}</p>
      <p className="mb-1"><strong>Email:</strong> {reservation.email}</p>
    </div>
  );
}