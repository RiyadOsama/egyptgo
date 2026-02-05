'use client';

import { Loader2 } from 'lucide-react';

export default function LoadingSpinner({ message = 'Loading...', fullHeight = true }) {
  const containerClass = fullHeight ? 'min-h-[60vh]' : 'py-12';

  return (
    <div className={`flex flex-col items-center justify-center ${containerClass}`}>
      <div className="relative">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <div className="absolute inset-0 h-12 w-12 bg-gradient-to-r from-primary/20 to-transparent rounded-full animate-pulse" />
      </div>
      <p className="text-muted-foreground mt-4 text-center max-w-xs animate-pulse">{message}</p>
    </div>
  );
}
