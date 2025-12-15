import Image from "next/image"
import img from '../../public/istockphoto-466090186-612x612.jpg'
import Link from "next/link"
import { Edit, Delete, Calendar } from "lucide-react"
export default function PackageCard({ show = false }) {
    return(
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition w-[350px] bg-white">
            <Image src={img} alt="Cairo" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"/>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Safari Experience</h3>
                <p className="text-gray-600 mb-4 ">Serengeti, Tanzania</p>
            </div>
            <div className="flex items-center justify-between p-2">
                <div className="flex items-center">
                    <Calendar className="ml-2 h-4 w-4 text-gray-600"/>
                    <p className="ml-2">7 Days</p>
                </div>
                <p className="px-4 py-2 text-orange-600">$2,500</p>
            </div>
            <div>
                <p className="text-gray-600 mb-4 p-4">Experience the thrill of a lifetime with our Safari Experience package, exploring the wilds of Tanzania.</p>
            </div>
            {show && (
                <div className="flex w-full justify-between">
                    <Link href="/dashboard/packs/edit-package/1" className="bg-white text-black hover:bg-gray-200 px-1 py-1 transition duration-300 rounded-md mx-4 mb-4 flex items-center border w-[100px] justify-center">
                        <Edit className="mr-3 h-4 w-4"/>
                        Edit 
                    </Link>
                    <button className="cursor-pointer px-2 py-1 transition duration-300 rounded-md text-black hover:bg-gray-200 mx-4 mb-4 border flex items-center w-[100px] justify-center">
                        <Delete className="mr-3 h-4 w-4 text-red-600"/>
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}