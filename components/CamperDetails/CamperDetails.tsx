'use client';

import { useState } from 'react';
import CamperHeader from '../CamperHeader/CamperHeader';
import Gallery from '../Gallery/Gallery';
import { Camper } from '@/types/camper';
import Tabs from '../Tabs/Tabs';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
interface Props {
  camper: Camper;
}

const CamperDetails = ({ camper }: Props) => {
  const [tab, setTab] = useState<'features' | 'reviews'>('features');
  return (
    <div>
      <CamperHeader camper={camper} />
      <Gallery images={camper.gallery} />
      <p>{camper.description}</p>
      <Tabs active={tab} onChange={setTab} />
      {tab === 'features' ? (
        <Features camper={camper} />
      ) : (
        <Reviews reviews={camper.reviews} />
      )}
      ;
    </div>
  );
};

export default CamperDetails;
