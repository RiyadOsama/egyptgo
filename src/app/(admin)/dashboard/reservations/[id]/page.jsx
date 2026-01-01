'use client';
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, User, MapPin, Users, DollarSign, Package, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useGetBookingById } from "@/hooks/use-bookings";
import { useGetUserById } from "@/hooks/use-user";
import { useGetPackageById } from "@/hooks/use-packages";
import { useParams } from "next/navigation";

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
    activities: ["Beach relaxation", "Temple tours", "Surfing lessons", "Spa treatments"],
    accommodation: "5-star beachfront resort",
    mealsIncluded: "Breakfast & Dinner",
  },
};

export default function ReservationDetailPage() {
  const params = useParams();
  const {data:reservation, isLoading, isError} = useGetBookingById(params.id);
  console.log("Reservation data in detail page:", reservation);
  const {data:userData, isLoading:userLoading, isError:userError} = useGetUserById(reservation?.data.userId);
  console.log("User data in detail page:", userData);
  const {data:packageData, isLoading:packageLoading, isError:packageError} = useGetPackageById(reservation?.data.packageId);
  console.log("Package data in detail page:", packageData);
  const formattedDate = new Date(reservation?.data.createdAt)
  .toLocaleDateString("en-GB");
  if(isLoading || userLoading){
    return (
      <div className="min-h-screen flex items-center justify-center">
      <p>Loading...</p>
      </div>
    );
  }

  if(isError || userError){
    return (
      <div className="min-h-screen flex items-center justify-center">
      <p>Error loading Details.</p>
      </div>
    )
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reservation Details</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Customer Information */}
        <div className="bg-card rounded-md p-4 shadow-sm border ">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Customer Information
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="text-base font-medium">{userData?.data.userName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email Address</p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <p className="text-base">{userData?.data.email}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone Number</p>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                {/* <p className="text-base">{mockReservation.phone}</p> */}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Number of Guests</p>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <p className="text-base">{reservation?.data.numberOfPeople} guests</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Information */}
        <div className="bg-card rounded-md p-4 shadow-sm border">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Booking Information
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Booking Date</p>
              <p className="text-base font-medium">{formattedDate}</p>
            </div>
            <div>
              {/* <p className="text-sm text-muted-foreground">Travel Date</p> */}
              {/* <p className="text-base font-medium">{mockReservation.travelDate}</p> */}
            </div>
            <div>
              {/* <p className="text-sm text-muted-foreground">Return Date</p> */}
              {/* <p className="text-base font-medium">{mockReservation.returnDate}</p> */}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="text-base font-medium">{packageData?.data.duration} days</p>
            </div>
          </div>
        </div>

        {/* Package Details */}
        <div className="lg:col-span-2 bg-card rounded-md p-4 shadow-sm border ">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Package Details
            </div>
            <p className="text-base font-medium text-primary">{packageData?.data.name}</p>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Destination</p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <p className="text-base font-medium">{mockReservation.destination}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Accommodation</p>
                <p className="text-base font-medium">5-star beachfront resort</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Meals Included</p>
                <p className="text-base font-medium">Breakfast & Dinner</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <div className="flex items-center gap-1 text-xl font-bold text-primary">
                  <DollarSign className="h-5 w-5" />
                  <span>{packageData?.data.price}</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Activities Included</p>
              <div className="flex flex-wrap gap-2">
                {packageData?.data.included.map((activity, idx) => (
                  <div key={idx} className="bg-primary/50 px-2 py-0.5 rounded-md text-primary-foreground">
                    {activity}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Description</p>
              <p className="text-base">{packageData?.data.description}</p>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="lg:col-span-2 bg-card rounded-md p-4 shadow-sm border ">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Payment Information
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="text-base font-medium">Credit Card</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payment Status</p>
                <div className="bg-green-500 text-accent-foreground hover:opacity-90 w-fit px-1 rounded-sm">Paid</div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-xl font-bold text-primary">{reservation?.data.totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="bg-primary hover:opacity-90 text-primary-foreground">
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
