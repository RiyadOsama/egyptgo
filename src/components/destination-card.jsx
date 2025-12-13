import Image from "next/image"
import img from '../../public/istockphoto-466090186-612x612.jpg'
export default function DestinationCard() {
    return(
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <Image src={img} alt="Cairo" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"/>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Cairo</h3>
                <p className="text-gray-600 mb-4">Discover the bustling capital of Egypt, home to the iconic Pyramids of Giza and the Sphinx.</p>
            </div>
        </div>
    )
}