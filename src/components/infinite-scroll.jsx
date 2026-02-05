'use client';

import { useEffect, useRef, useState } from 'react';
import LoadingSpinner from '@/components/loading-spinner';

export default function InfiniteScroll({ hasMore, onLoadMore, isLoading, children }) {
  const observerTarget = useRef(null);
  const [hasObserver, setHasObserver] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading && hasObserver) {
          onLoadMore();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      },
    );

    setHasObserver(true);

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [hasMore, isLoading, onLoadMore, hasObserver]);

  return (
    <>
      {children}
      {(hasMore || isLoading) && (
        <div ref={observerTarget} className="flex justify-center items-center py-12">
          {isLoading && <LoadingSpinner />}
        </div>
      )}
    </>
  );
}
