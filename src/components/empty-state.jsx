'use client';

import Link from 'next/link';
import { Package, MapPin } from 'lucide-react';

export default function EmptyState({
  title = 'No items found',
  message = 'There are no items to display.',
  icon: Icon = Package,
  actionLabel = null,
  actionHref = null,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-muted rounded-3xl bg-muted/5">
      <div className="bg-muted/20 p-6 rounded-full mb-6">
        <Icon className="h-10 w-10 text-muted-foreground/60" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-8 text-center max-w-md">{message}</p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="text-primary font-semibold hover:underline transition-all inline-flex items-center gap-1 hover:gap-2"
        >
          {actionLabel} →
        </Link>
      )}
    </div>
  );
}
