import DestinationCard from "@/components/destination-card";
import Modal from "@/components/modal";

export default function ManageDestinationsPage() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold mb-6">Manage Destinations</h1>
                <p className="mb-4">Here you can add, edit, or remove travel destinations.</p>
            </div>
            <div>
                <Modal 
                    title="Create Destination"
                    description="Enter your destination details below."
                    createClassName="bg-orange-600 text-white hover:bg-orange-700 hover:text-white font-semibold  rounded-lg"
                    packages
                >
                + Create
                </Modal>
            </div>
        </div>
        <div className="max-w-7xl py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DestinationCard show/>
            <DestinationCard show/>
            <DestinationCard />
            <DestinationCard />
        </div>
    </div>
  );
}