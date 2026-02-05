'use client';

import { AlertCircle, RefreshCw } from 'lucide-react';

export default function ErrorState({
  title = 'Something went wrong',
  message = 'An error occurred while loading the content.',
  onRetry = null,
  icon: Icon = AlertCircle,
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <div className="bg-destructive/10 p-6 rounded-full mb-6">
        <Icon className="h-10 w-10 text-destructive" />
      </div>
      <h2 className="text-2xl font-semibold text-foreground mb-2 text-center">{title}</h2>
      <p className="text-muted-foreground text-center max-w-md mb-8">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
      )}
    </div>
  );
}
