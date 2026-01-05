'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Edit, Trash2 } from 'lucide-react';

export default function DestinationCard({ destination, onDelete, showActions = false, isDeleting = false }) {
  const CardContent = (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <Image
          src={destination?.image?.url || 'https://placehold.co/600x400?text=No+Image'}
          alt={destination?.name || 'Destination'}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-bold tracking-tight text-foreground line-clamp-1">{destination?.name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6">{destination?.description}</p>
      </div>
    </>
  );

  return (
    <div className="group flex flex-col h-full rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-md transition-all duration-300">
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
