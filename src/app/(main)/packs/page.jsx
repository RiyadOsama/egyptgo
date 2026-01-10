import getPackages from '@/lib/get-allPackages';
import PackagesClient from '@/components/packages-client';
export default async function Packages({ searchParams }) {
  // const currentPage = Number(searchParams?.page) || 1;
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

  const { packages, totalPages } = await getPackages(currentPage, 3);

  return (
    <PackagesClient
      packages={packages}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
}
