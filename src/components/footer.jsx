import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card text-foreground py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-fit p-1 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">EgyptGo</span>
              </div>
            </div>
            <p className="text-sm opacity-80">Explore ancient wonders and create lasting memories</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="opacity-80 hover:opacity-100">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packs" className="opacity-80 hover:opacity-100">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm opacity-80">📧 info@egypttravels.com</p>
            <p className="text-sm opacity-80">📞 +1 (555) 123-4567</p>
            <p className="text-sm opacity-80">📍 Cairo, Egypt</p>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Egypt Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
