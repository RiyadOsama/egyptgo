'use client';

import { useEffect, useRef, useState } from 'react';
import DestinationCard from '@/components/destination-card';
import InfiniteScroll from '@/components/infinite-scroll';
import getDestinations from '@/lib/get-destinations';

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const hasLoadedInitial = useRef(false);

  // Load initial destinations
  useEffect(() => {
    if (!hasLoadedInitial.current) {
      const loadInitial = async () => {
        try {
          const { destinations: initialDest, totalPages: pages } = await getDestinations(1, 3);
          setDestinations(initialDest);
          setTotalPages(pages);
          setCurrentPage(1);
          hasLoadedInitial.current = true;
        } catch (error) {
          console.error('Failed to load initial destinations:', error);
        }
      };
      loadInitial();
    }
  }, []);

  const loadMore = async () => {
    if (isLoading || currentPage >= totalPages) return;

    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const { destinations: newDest } = await getDestinations(nextPage, 3);
      setDestinations((prev) => [...prev, ...newDest]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Failed to load more destinations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMore = currentPage < totalPages;

  return (
    <main className="bg-background">
      <section className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Destinations</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore all of Egypt's incredible destinations and find your perfect getaway
            </p>
          </div>
        </div>
        {destinations?.length === 0 ? (
          <div className="col-span-full text-center py-10">
            <p>No destinations found at this time.</p>
          </div>
        ) : (
          <InfiniteScroll hasMore={hasMore} onLoadMore={loadMore} isLoading={isLoading}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations?.map((destination) => (
                <DestinationCard key={destination._id} destination={destination} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </section>
    </main>
  );
}
