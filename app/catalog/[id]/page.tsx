import CamperDetails from '@/components/CamperDetails/CamperDetails';
import { fetchCamperById } from '@/lib/serverApi';
import { notFound } from 'next/navigation';

interface CamperPageProps {
  params: { id: string };
}

const CamperPage = async ({ params }: CamperPageProps) => {
  const camper = await fetchCamperById(params.id);
  if (!camper) {
    return notFound;
  }
  return (
    <div>
      <CamperDetails camper={camper} />
    </div>
  );
};

export default CamperPage;
