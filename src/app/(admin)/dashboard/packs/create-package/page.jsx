import PackageForm from "@/components/package-form";
export default function CreatePackagePage() {
  return (
    <div className="max-w-7xl lg:mx-auto lg:w-3xl xl:mx-auto xl:w-4xl py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Create New Package</h1>
      <p>Use the form below to create a new travel package.</p>
      <div className="mt-6 bg-card p-6 rounded-lg shadow-md">
        <PackageForm />
      </div>
    </div>
  );
}
