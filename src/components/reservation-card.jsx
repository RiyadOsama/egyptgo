import Link from "next/link";
import {Calendar, Users, User, Phone, Mail, DollarSign} from "lucide-react";

export default function ReservationCard({ reservation }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm mb-4 bg-white">
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
                <User className="text-orange-600 w-6 h-6" />
                <h2 className="text-xl font-semibold">Reservation for {reservation.name}</h2>
            </div>
            <div className="py-0.5 px-2 bg-orange-600 rounded-md hover:bg-orange-800 transition">
                <p className="text-white">Confirmed</p>
            </div>
        </div>
      <p className="mb-1"><Calendar className="inline-block mr-2 w-4 h-4" />Date: {reservation.date}</p>
      <p className="mb-1"><Calendar className="inline-block mr-2 w-4 h-4" />Booked on: {reservation.booked_on}</p>
      <p className="mb-1"><Users className="inline-block mr-2 w-4 h-4" />Guests: {reservation.guests}</p>
      <p className="mb-1"><Phone className="inline-block mr-2 w-4 h-4" />Contact: {reservation.contact}</p>
      <p className="mb-1"><DollarSign className="inline-block mr-2 w-4 h-4" />Total: {reservation.total}</p>
      <p className="mb-1"><Mail className="inline-block mr-2 w-4 h-4" />Email: {reservation.email}</p>
      <div className="mt-6">
        <Link href={`/dashboard/reservations/${reservation.id}`} className="bg-orange-50 px-2 py-1 text-black border rounded-sm hover:bg-orange-100 transition cursor-pointer">View Details</Link>
      </div>
    </div>
  );
}