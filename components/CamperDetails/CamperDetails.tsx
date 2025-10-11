'use client';

import { useState } from 'react';
import CamperHeader from '../CamperHeader/CamperHeader';
import Gallery from '../Gallery/Gallery';
import { Camper } from '@/types/camper';
import Tabs from '../Tabs/Tabs';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import BookingForm from '../BookingForm/BookingForm';
import styles from './CamperDetails.module.css';
interface Props {
  camper: Camper;
}

const CamperDetails = ({ camper }: Props) => {
  const [tab, setTab] = useState<'features' | 'reviews'>('features');
  return (
    <div>
      <CamperHeader camper={camper} />
      <Gallery images={camper.gallery} />
      <p className={styles.description}>{camper.description}</p>
      <Tabs active={tab} onChange={setTab} />
      <div className={styles.tabs}>
        {tab === 'features' ? (
          <Features camper={camper} />
        ) : (
          <Reviews reviews={camper.reviews} />
        )}
        <BookingForm />
      </div>
    </div>
  );
};

export default CamperDetails;
