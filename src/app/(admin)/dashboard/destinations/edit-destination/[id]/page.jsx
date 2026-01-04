import DestinationForm from '@/components/destination-form';

export default async function EditDestinationPage({ params }) {
  const { id } = await params;
  return (
    <div className="max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Edit Your Destination</h1>
      <p>Use the form below to Update Your destination.</p>
      <div className="mt-6 bg-card p-6 rounded-lg shadow-md">
        <DestinationForm id={id} />
      </div>
    </div>
  );
}
