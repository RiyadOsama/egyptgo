'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Edit, Trash2, Calendar } from 'lucide-react';

export default function PackageCard({ pkg, onDelete, showActions = false }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)] dark:border-gray-700 border border-border bg-card hover:shadow-md transition-all flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={pkg.image?.url || 'https://placehold.co/600x400?text=No+Image'}
          fill
          alt={pkg.name}
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-1 text-foreground">{pkg.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{pkg.destinationName}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm font-medium">
            <Calendar className="h-4 w-4 text-primary mr-2" />
            <span>{pkg.duration} Days</span>
          </div>
          <p className="font-bold text-primary">${pkg.price}</p>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">{pkg.description}</p>

        {showActions && (
          <div className="flex gap-3 pt-4 border-t border-border mt-auto">
            <Link
              href={`/dashboard/packs/edit-package/${pkg.id}`}
              className="flex-1 bg-background text-foreground border border-border hover:bg-accent px-3 py-2 transition rounded-lg flex items-center justify-center text-sm font-medium"
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Link>
            <button
              type="button"
              onClick={() => onDelete?.(pkg.id)}
              className="flex-1 bg-background text-destructive border border-destructive/20 hover:bg-destructive/10 px-3 py-2 transition rounded-lg flex items-center justify-center text-sm font-medium cursor-pointer"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
