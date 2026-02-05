import getPackages from '@/lib/get-allPackages';
import PackagesClient from '@/components/packages-client';

export default async function Packages() {
  const { packages, totalPages } = await getPackages(1, 3);

  return <PackagesClient packages={packages} totalPages={totalPages} />;
}
