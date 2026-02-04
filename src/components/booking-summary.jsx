'use client';
export default function BookingSummary({ packageData, totalPrice }) {
  return (
    <div>
      <div className="bg-primary text-background rounded-lg p-6 sticky top-24 shadow-md border border-border">
        <h2 className="text-xl font-bold mb-4">Booking Summary</h2>

        <div className="space-y-4 pb-4 border-b border-border/20">
          <div>
            <p className="text-sm text-muted-background">Package</p>
            <p className="font-semibold">Aswan & Nubian Adventure</p>
          </div>
          <div>
            <p className="text-sm text-muted-background">Duration</p>
            <p className="font-semibold">{packageData?.duration}</p>
          </div>
        </div>

        <div className="py-4 border-b border-border/20">
          <div className="flex justify-between mb-2">
            <span className="text-sm">Price per person</span>
            <span className="font-semibold">$ {packageData?.price}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm">Maximum Number of guests</span>
            <span className="font-semibold">{packageData?.groupSize}</span>
          </div>
        </div>

        <div className="py-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total</span>
            <span className="text-2xl font-bold">$ {totalPrice}</span>
          </div>
        </div>

        <div className="mt-4 text-xs text-muted-background">
          <p>You'll receive payment details after confirmation</p>
        </div>
      </div>
    </div>
  );
}
