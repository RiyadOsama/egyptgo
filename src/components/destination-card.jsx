'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Edit, Trash2, MapPin } from 'lucide-react';

export default function DestinationCard({ destination, onDelete, showActions = false, isDeleting = false }) {
  const CardContent = (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-muted to-muted/50">
        <Image
          src={destination?.image?.url || 'https://placehold.co/600x400?text=No+Image'}
          alt={destination?.name || 'Destination'}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>

      <div className="flex flex-col grow p-5">
        <div className="flex items-start gap-2 mb-2">
          <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
          <h3 className="text-lg font-bold tracking-tight text-foreground line-clamp-1 flex-1">{destination?.name}</h3>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-4">{destination?.description}</p>
        <div className="mt-auto pt-4 border-t border-border/30">
          <p className="text-primary font-semibold text-sm flex items-center gap-1">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs">
              {destination?.packagesCount || 0}
            </span>
            Package{destination?.packagesCount !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="group flex flex-col h-full rounded-xl overflow-hidden border bg-card shadow-sm dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)] dark:border-gray-700 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
      {showActions ? <div>{CardContent}</div> : <Link href={`/destinations/${destination?._id}`}>{CardContent}</Link>}

      {showActions && (
        <div className="mt-auto flex items-center gap-3 p-5 pt-5 border-t border-border/50">
          <Link
            href={`/dashboard/destinations/edit-destination/${destination?._id}`}
            className="flex-1 bg-background text-foreground border border-border hover:bg-accent px-3 py-2 transition rounded-lg flex items-center justify-center text-sm font-medium"
          >
            <Edit className="h-4 w-4" /> Edit
          </Link>
          <button
            onClick={() => onDelete?.(destination?._id)}
            disabled={isDeleting}
            className="flex-1 bg-background text-destructive border border-destructive/20 hover:bg-destructive/10 px-3 py-2 transition rounded-lg flex items-center justify-center text-sm font-medium cursor-pointer"
          >
            <Trash2 className="h-4 w-4" /> {isDeleting ? '...' : 'Delete'}
          </button>
        </div>
      )}
    </div>
  );
}
