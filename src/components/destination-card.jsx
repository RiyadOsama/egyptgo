import Image from "next/image"
import Modal from "./modal"
import img from '../../public/istockphoto-466090186-612x612.jpg'
export default function DestinationCard({ show = false }) {
    return(
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <Image src={img} alt="Cairo" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"/>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Cairo</h3>
                <p className="text-gray-600 mb-4">Discover the bustling capital of Egypt, home to the iconic Pyramids of Giza and the Sphinx.</p>
            </div>
            {show && (
                <div className="flex w-full justify-between">
                    <Modal 
                        title="Edit Destination"
                        description="Update your destination details below."
                        createClassName="bg-white text-black hover:bg-gray-200 px-1 py-1 transition duration-300 rounded-md mx-4 mb-4"
                    >
                    Edit Destination
                    </Modal>
                    {/* <button className="bg-white cursor-pointer px-2 py-1 transition duration-300 rounded-md text-black mx-4 mb-4">Edit Destination</button> */}
                    <button className="bg-red-600 hover:bg-red-800 cursor-pointer px-2 py-1 transition duration-300 rounded-md text-orange-50 mx-4 mb-4">Delete Destination</button>
                </div>
            )}
        </div>
    )
}