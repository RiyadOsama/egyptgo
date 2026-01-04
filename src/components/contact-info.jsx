import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {/*******Email card *********/}
      <div className="bg-card rounded-lg p-8 shadow-md text-center">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
          <Link
            href="mailto:info@egyptgo.com"
            className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 cursor-pointer"
          >
            <Mail className="text-primary-foreground" size={24} />
          </Link>
        </div>
        <h3 className="text-lg font-bold text-card-foreground mb-2">Email</h3>
        <p className="text-muted-foreground">info@egyptgo.com</p>
      </div>

      {/*********** Phone card ********** */}
      <div className="bg-card rounded-lg p-8 shadow-md text-center">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
          <Link
            href="tel:+15551234567"
            className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 cursor-pointer"
          >
            <Phone className="text-primary-foreground" size={24} />
          </Link>
        </div>
        <h3 className="text-lg font-bold text-card-foreground mb-2">Phone</h3>
        <p className="text-muted-foreground">+1 (555) 123-4567</p>
      </div>

      {/********** Location card **************/}
      <div className="bg-card rounded-lg p-8 shadow-md text-center">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
          <Link
            href="https://www.google.com/maps?q=Cairo,Egypt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 cursor-pointer"
          >
            <MapPin className="text-primary-foreground" size={24} />
          </Link>
        </div>
        <h3 className="text-lg font-bold text-card-foreground mb-2">Location</h3>
        <p className="text-muted-foreground">Cairo, Egypt</p>
      </div>
    </div>
  );
}
