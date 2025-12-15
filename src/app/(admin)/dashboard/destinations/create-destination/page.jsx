import DestinationForm from "@/components/destination-form";

export default function CreateDestinationPage() {
  return (
    <div className="max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Create New Destination</h1>
      <p>Use the form below to create a new travel destination.</p>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <DestinationForm />
      </div>
    </div>
  );
}
