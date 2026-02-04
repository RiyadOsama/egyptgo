'use client';
import Link from 'next/link';
import { Calendar, Users, User, Phone, Mail, DollarSign } from 'lucide-react';
import { useGetAllBookings } from '@/hooks/use-bookings';

export default function ReservationCard({ reservation }) {
  const { data, isLoading, isError } = useGetAllBookings();
  const reservations = data?.data || [];
  console.log('Reservations Data:', reservations);

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-lg">Loading reservations...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-lg text-destructive">Error loading reservations.</p>
      </div>
    );
  }

  return (
    <>
      {reservations.map((reservation) => (
        <div
          key={reservation.id}
          className="border rounded-lg p-4 shadow-sm dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)] dark:border-gray-700 mb-4 bg-card"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <User className="text-primary w-6 h-6" />
              <h2 className="text-xl font-semibold">Reservation for {reservation.contact.name}</h2>
            </div>
            <div className="py-0.5 px-2 bg-primary rounded-md hover:opacity-90 transition">
              <p className="text-primary-foreground">Confirmed</p>
            </div>
          </div>
          {/* <p className="mb-1">
          <Calendar className="inline-block mr-2 w-4 h-4" />
          Date: {reservation.date}
        </p>
        <p className="mb-1">
          <Calendar className="inline-block mr-2 w-4 h-4" />
          Booked on: {reservation.booked_on}
        </p> */}
          <p className="mb-1">
            <Users className="inline-block mr-2 w-4 h-4" />
            Guests: {reservation.numberOfPeople}
          </p>
          {/* <p className="mb-1">
          <Phone className="inline-block mr-2 w-4 h-4" />
          Contact: {reservation.contact}
        </p> */}
          <p className="mb-1">
            <DollarSign className="inline-block mr-2 w-4 h-4" />
            Total: {reservation.totalPrice}
          </p>
          {/* <p className="mb-1">
          <Mail className="inline-block mr-2 w-4 h-4" />
          Email: {reservation.email}
        </p> */}
          <div className="mt-6">
            <Link
              href={`/dashboard/reservations/${reservation.id}`}
              className="bg-primary px-2 py-1 text-primary-foreground border rounded-md hover:opacity-90 transition cursor-pointer"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
