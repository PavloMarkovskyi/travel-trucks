import { Camper } from '@/types/camper';
import { formatPrice, formatRating } from '@/utils/fomat';
import styles from './CamperHeader.module.css';
interface Props {
  camper: Camper;
}

const CamperHeader = ({ camper }: Props) => {
  return (
    <header>
      <h1 className={styles.title}>{camper.name}</h1>
      <div className={styles.review}>
        <p className={styles.text}>
          <svg className={styles.reviewIcon}>
            <use href="/reviews.svg#reviews-filled" />
          </svg>
          {formatRating(camper.rating)}({camper.reviews.length} Reviews)
        </p>
        <p>
          <svg className={styles.mapIcon}>
            <use href="/reviews.svg#map" />
          </svg>
          {camper.location}
        </p>
      </div>
      <p className={styles.price}>€{formatPrice(camper.price)}</p>
    </header>
  );
};

export default CamperHeader;
