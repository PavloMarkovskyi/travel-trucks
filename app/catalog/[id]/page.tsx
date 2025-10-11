import CamperDetails from '@/components/CamperDetails/CamperDetails';
import { fetchCamperById } from '@/lib/serverApi';
import { notFound } from 'next/navigation';
import styles from './CamperPage.module.css';

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
    <main className={styles.main}>
      <CamperDetails camper={camper} />
    </main>
  );
};

export default CamperPage;
