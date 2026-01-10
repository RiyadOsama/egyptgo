export default async function getPackages(page = 1, limit = 3) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/packages/all?page=${page}&limit=${limit}`, {
    next: {
      revalidate: 3600, // Refetching every 1 hour
      tags: ['package-list'], // Allow actions on the homepage to be reflected on the dashboard.
    },
  });

  if (!res.ok) return { data: [], totalPages: 0 };

  const json = await res.json();

  return {
    packages: json?.data || [],
    totalPages: json?.meta?.totalPages || 1,
  };
}
