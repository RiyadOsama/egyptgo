export default function FrequentlyAskedQuestions() {
  return (
    <div className="bg-primary rounded-lg p-8 text-primary-foreground">
      <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-4 text-sm">
        <div>
          <p className="font-semibold mb-2">What's included in the packages?</p>
          <p className="opacity-80">
            Each package includes accommodation, guided tours, and specified meals. See package details for specifics.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Can I customize a package?</p>
          <p className="opacity-80">Contact us to discuss custom itineraries tailored to your interests.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">What's your cancellation policy?</p>
          <p className="opacity-80">Free cancellation up to 7 days before departure. Terms vary by package.</p>
        </div>
      </div>
    </div>
  );
}
