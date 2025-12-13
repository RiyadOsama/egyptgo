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
                <ul className="flex justify-between gap-5 items-center">
                    <li><Link href="/destinations" className="transition text-foreground hover:text-orange-600">Destinations</Link></li>
                    <li><Link href="/packs" className="transition text-foreground hover:text-orange-600">Packages</Link></li>
                    <li><Link href="/about" className="transition text-foreground hover:text-orange-600">About</Link></li>
                    <li><Link href="/contact" className="transition text-foreground hover:text-orange-600">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}