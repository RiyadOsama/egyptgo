import Link from "next/link"
export default function Header(){
    return(
        <header className="bg-orange-50 z-50 sticky top-0 shadow-sm">
            <nav className="flex justify-between p-8 items-center max-w-7xl mx-auto h-16">
                <div>
                    <p className="bg-orange-600 p-2 rounded-md text-orange-50">
                        <Link href="/">TWU</Link>
                    </p>
                </div>
                <ul className="flex justify-between gap-6 items-center">
                    <li><Link href="/destinations" className="transition text-foreground hover:text-orange-600">Destinations</Link></li>
                    <li><Link href="/packs" className="transition text-foreground hover:text-orange-600">Packages</Link></li>
                    <li><Link href="/about" className="transition text-foreground hover:text-orange-600">About</Link></li>
                    <li><Link href="/contact" className="transition text-foreground hover:text-orange-600">Contact</Link></li>
                </ul>
                <div className="flex justify-between gap-4 items-center">
                    <Link href="/login" className="transition text-foreground hover:text-orange-600 cursor-pointer">Sign in</Link>
                    <Link href="/book-form" className="px-2 py-0.5 bg-orange-600 rounded-md text-white cursor-pointer">Book Now</Link>
                </div>
            </nav>
        </header>
    )
}