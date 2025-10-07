import { fetchCamperById } from '@/lib/serverApi';
import React from 'react';

const CapmperPage = async () => {
  const camper = await fetchCamperById(params.id);
  return <div>CapmperPage</div>;
};

export default CapmperPage;
