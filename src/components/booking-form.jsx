'use client';

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { useCreateBooking } from '@/hooks/use-bookings';

export default function BookingForm({ packageData, totalPrice, setTotalPrice }) {
  useEffect(() => {
    if (packageData?.price) {
      setTotalPrice(packageData.price);
    }
  }, [packageData]);
  const [date, setDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const createBookingMutation = useCreateBooking();
  const bookingSubmitHandler = (e) => {
    e.preventDefault();
    createBookingMutation.mutate({
      packageId: packageData?.id,
      numberOfPeople: guests,
      totalPrice: totalPrice,
      contact: {
        name: name,
        email: email,
        phone: phone,
      },
    });
  };

  return (
    <div className="mx-auto rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border overflow-hidden bg-card">
      <div className="p-8 border-b border-border bg-background">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Complete Your Booking</h1>
        <p className="text-sm mt-1 text-muted-foreground">Provide your details to secure your reservation.</p>
      </div>

      <form className="p-8 space-y-6">
        <div>
          <label htmlFor="fullname" className="text-sm font-semibold mb-1.5 text-foreground block">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="John Doe"
            className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring shadow-sm hover:shadow-md transition-shadow"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="text-sm font-semibold mb-1.5 text-foreground block">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring shadow-sm hover:shadow-md transition-shadow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-semibold mb-1.5 text-foreground block">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (555) 000-0000"
              className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring shadow-sm hover:shadow-md transition-shadow"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="guests" className="text-sm font-semibold mb-1.5 text-foreground block">
              Guests
            </label>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => {
                  setGuests(Number(e.target.value));
                  setTotalPrice(packageData.price * Number(e.target.value));
                }}
                id="guests"
                className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring shadow-sm hover:shadow-md transition-shadow"
              >
                {Array.from({ length: packageData?.groupSize }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1.5 text-foreground">
              Departure Date
            </label>
            <div className="relative w-full">
              <DatePicker
                selected={date}
                onChange={setDate}
                placeholderText="Pick a date"
                className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring shadow-sm hover:shadow-md transition-shadow"
                calendarClassName="rounded-2xl shadow-2xl border border-border p-2 bg-background text-foreground"
                popperClassName="z-50"
              />
              <CalendarIcon className="absolute right-3 top-3 text-primary pointer-events-none h-4 w-4" />
            </div>
          </div> */}
        </div>
        <div>
          <label className="text-sm font-semibold mb-1.5 text-foreground block">Special Requests</label>
          <textarea
            rows={3}
            placeholder="Any dietary requirements or accessibility needs?"
            className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring shadow-sm hover:shadow-md resize-none transition-shadow"
          />
        </div>

        <button
          type="submit"
          onClick={bookingSubmitHandler}
          className="w-full py-4 rounded-xl font-bold mt-4 active:scale-[0.97] transition-all bg-primary text-primary-foreground shadow-[0_10px_20px_var(--color-primary)/20] cursor-pointer"
        >
          Confirm My Booking
        </button>
      </form>
    </div>
  );
}
