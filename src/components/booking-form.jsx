"use client";

import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";

export default function BookingForm() {
  const [date, setDate] = useState(null);

  return (
    <div className="mx-auto rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border overflow-hidden bg-card">
      <div className="p-8 border-b border-border bg-background">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Complete Your Booking</h1>
        <p className="text-sm mt-1 text-muted-foreground">Provide your details to secure your reservation.</p>
      </div>

      <Form.Root className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Name */}
        <div className="grid grid-cols-1 gap-5">
          <Form.Field name="fullName">
            <Form.Label className="text-sm font-semibold mb-1.5 text-foreground">Full Name</Form.Label>
            <Form.Control asChild>
              <input
                placeholder="John Doe"
                required
                className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm hover:shadow-md transition-shadow"
              />
            </Form.Control>
            <Form.Message match="valueMissing" className="text-xs mt-1 text-destructive">
              Required
            </Form.Message>
          </Form.Field>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Form.Field name="email">
              <Form.Label className="text-sm font-semibold mb-1.5 text-foreground">Email</Form.Label>
              <Form.Control asChild>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm hover:shadow-md transition-shadow"
                />
              </Form.Control>
              <Form.Message match="valueMissing" className="text-xs mt-1 text-destructive">
                Required
              </Form.Message>
              <Form.Message match="typeMismatch" className="text-xs mt-1 text-destructive">
                Invalid email
              </Form.Message>
            </Form.Field>

            <Form.Field name="phone">
              <Form.Label className="text-sm font-semibold mb-1.5 text-foreground">Phone</Form.Label>
              <Form.Control asChild>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                  className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm hover:shadow-md transition-shadow"
                />
              </Form.Control>
              <Form.Message match="valueMissing" className="text-xs mt-1 text-destructive">
                Required
              </Form.Message>
            </Form.Field>
          </div>
        </div>

        {/* Guests & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Form.Field name="guests">
            <Form.Label className="text-sm font-semibold mb-1.5 text-foreground">Guests</Form.Label>
            <div className="relative">
              <Form.Control asChild>
                <select className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm hover:shadow-md transition-shadow">
                  {[1, 2, 4, 6, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </Form.Control>
              <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </Form.Field>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1.5 text-foreground">Departure Date</label>
            <div className="relative w-full">
              <DatePicker
                selected={date}
                onChange={setDate}
                placeholderText="Pick a date"
                className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm hover:shadow-md transition-shadow"
                calendarClassName="rounded-2xl shadow-2xl border border-border p-2 bg-background text-foreground"
                popperClassName="z-50"
              />
              <CalendarIcon className="absolute right-3 top-3 text-primary pointer-events-none h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Special Requests */}
        <Form.Field name="requests">
          <Form.Label className="text-sm font-semibold mb-1.5 text-foreground">Special Requests</Form.Label>
          <Form.Control asChild>
            <textarea
              rows={3}
              placeholder="Any dietary requirements or accessibility needs?"
              className="w-full rounded-xl px-4 py-3 text-sm bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm hover:shadow-md resize-none transition-shadow"
            />
          </Form.Control>
        </Form.Field>

        {/* Submit */}
        <Form.Submit asChild>
          <button className="w-full py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-[0.97] transition-all bg-primary text-primary-foreground shadow-[0_10px_20px_var(--color-primary)/20]">
            Confirm My Booking
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
