'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Edit, Trash2, Calendar, MapPin, DollarSign } from 'lucide-react';

export default function PackageCard({ pkg, onDelete, showActions = false, isDeleting = false }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)] dark:border-gray-700 border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all flex flex-col h-full group">
      <div className="relative h-48 w-full overflow-hidden bg-linear-to-br from-muted to-muted/50">
        <Image
          src={pkg.image?.url || 'https://placehold.co/600x400?text=No+Image'}
          fill
          alt={pkg.name}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground line-clamp-1">{pkg.name}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" />
              <span className="line-clamp-1">{pkg.destinationName}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 pt-3 pb-3 border-y border-border/30">
          <div className="flex items-center text-sm font-medium text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary mr-2" />
            <span>{pkg.duration} Days</span>
          </div>
          <div className="flex items-center text-lg font-bold text-primary">
            <DollarSign className="h-4 w-4" />
            {pkg.price}
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">{pkg.description}</p>

        {showActions && (
          <div className="flex gap-3 pt-4 border-t border-border/30 mt-auto">
            <Link
              href={`/dashboard/packs/edit-package/${pkg.id}`}
              className="flex-1 bg-background text-foreground border border-border hover:bg-accent/50 hover:border-accent px-3 py-2 transition rounded-lg flex items-center justify-center text-sm font-medium"
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Link>
            <button
              type="button"
              disabled={isDeleting}
              onClick={() => onDelete?.(pkg.id)}
              className="flex-1 bg-background text-destructive border border-destructive/20 hover:bg-destructive/10 px-3 py-2 transition rounded-lg flex items-center justify-center text-sm font-medium cursor-pointer disabled:opacity-50"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
