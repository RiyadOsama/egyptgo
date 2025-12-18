import { Button } from "@/components/ui/button";
import {
  Calendar,
  Mail,
  Phone,
  User,
  MapPin,
  Users,
  DollarSign,
  Package,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const mockReservation = {
  id: 1,
  customerName: "John Smith",
  email: "john.smith@email.com",
  phone: "+1 (555) 123-4567",
  packageName: "Tropical Paradise - Bali",
  destination: "Bali, Indonesia",
  bookingDate: "2024-12-10",
  travelDate: "2025-01-15",
  returnDate: "2025-01-22",
  guests: 2,
  totalPrice: "$2,499",
  status: "confirmed",
  paymentMethod: "Credit Card",
  specialRequests: "Vegetarian meals, Early check-in if possible",
  packageDetails: {
    duration: 7,
    activities: [
      "Beach relaxation",
      "Temple tours",
      "Surfing lessons",
      "Spa treatments",
    ],
    accommodation: "5-star beachfront resort",
    mealsIncluded: "Breakfast & Dinner",
  },
};

export default function ReservationDetailPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reservation Details</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Customer Information */}
        <div className="bg-white rounded-md p-4 shadow-sm border ">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-orange-600" />
              Customer Information
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="text-base font-medium">
                {mockReservation.customerName}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email Address</p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <p className="text-base">{mockReservation.email}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone Number</p>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <p className="text-base">{mockReservation.phone}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Number of Guests</p>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <p className="text-base">{mockReservation.guests} guests</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Information */}
        <div className="bg-white rounded-md p-4 shadow-sm border">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              Booking Information
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Booking Date</p>
              <p className="text-base font-medium">
                {mockReservation.bookingDate}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Travel Date</p>
              <p className="text-base font-medium">
                {mockReservation.travelDate}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Return Date</p>
              <p className="text-base font-medium">
                {mockReservation.returnDate}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="text-base font-medium">
                {mockReservation.packageDetails.duration} days
              </p>
            </div>
          </div>
        </div>

        {/* Package Details */}
        <div className="lg:col-span-2 bg-white rounded-md p-4 shadow-sm border ">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-orange-600" />
              Package Details
            </div>
            <p className="text-base font-medium text-orange-600">
              {mockReservation.packageName}
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Destination</p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <p className="text-base font-medium">
                    {mockReservation.destination}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Accommodation</p>
                <p className="text-base font-medium">
                  {mockReservation.packageDetails.accommodation}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Meals Included</p>
                <p className="text-base font-medium">
                  {mockReservation.packageDetails.mealsIncluded}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Price</p>
                <div className="flex items-center gap-1 text-xl font-bold text-orange-600">
                  <DollarSign className="h-5 w-5" />
                  <span>{mockReservation.totalPrice.replace("$", "")}</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Activities Included
              </p>
              <div className="flex flex-wrap gap-2">
                {mockReservation.packageDetails.activities.map(
                  (activity, idx) => (
                    <div
                      key={idx}
                      className="bg-orange-50 px-2 py-0.5 rounded-md"
                    >
                      {activity}
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Special Requests
              </p>
              <p className="text-base">{mockReservation.specialRequests}</p>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="lg:col-span-2 bg-white rounded-md p-4 shadow-sm border ">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-orange-600" />
              Payment Information
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="text-base font-medium">
                  {mockReservation.paymentMethod}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payment Status</p>
                <div className="bg-green-600 text-white hover:bg-green-700 w-fit px-1 rounded-sm">
                  Paid
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-xl font-bold text-orange-600">
                  {mockReservation.totalPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="bg-orange-600 hover:bg-orange-800 text-orange-50">
            <Mail className="mr-2 h-4 w-4" />
            Send Confirmation Email
          </Button>
          <Button variant="outline">
            <Phone className="mr-2 h-4 w-4" />
            Contact Customer
          </Button>
          <Button variant="outline">Export PDF</Button>
        </div>
      </div>
    </div>
  );
}
