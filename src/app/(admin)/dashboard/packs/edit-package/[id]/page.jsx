import PackageForm from "@/components/package-form";

export default async function EditPackagePage({params}) {
    const {id} = await params;
    return (
        <div className="max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Edit Your Package</h1>
            <p>Use the form below to Update Your travel package.</p>
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <PackageForm />
            </div>
        </div>
      );
}