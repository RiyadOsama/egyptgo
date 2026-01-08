export default async function getDestinations(page = 1, limit = 3) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/destinations?page=${page}&limit=${limit}`, {
    next: {
      revalidate: 3600, // Refetching every 1 hour
      tags: ['destinations-list'], // Allow actions on the homepage to be reflected on the dashboard.
    },
  });

  if (!res.ok) return { data: [], totalPages: 0 };

  const json = await res.json();

  return {
    destinations: json?.data || [],
    totalPages: json?.meta?.totalPages || 1,
  };
}
