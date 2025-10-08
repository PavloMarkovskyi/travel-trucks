import { fetchCamperById } from '@/lib/serverApi';
import { Camper } from '@/types/camper';

export default async function CamperPage({
  params,
}: {
  params: { id: string };
}) {
  const camper: Camper = await fetchCamperById(params.id);
  return <CamperDetails camper={camper} />;
}
