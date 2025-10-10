import CamperDetails from '@/components/CamperDetails/CamperDetails';
import { fetchCamperById } from '@/lib/serverApi';
import { notFound } from 'next/navigation';

interface CamperPageProps {
  params: { id: string } | Promise<{ id: string }>;
}

const CamperPage = async ({ params }: CamperPageProps) => {
  const { id } = await params;
  const camper = await fetchCamperById(id);
  if (!camper) {
    notFound();
  }
  return (
    <div>
      <CamperDetails camper={camper} />
    </div>
  );
};

export default CamperPage;
