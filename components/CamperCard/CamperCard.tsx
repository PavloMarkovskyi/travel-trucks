import { useCamperStore } from '@/lib/stores/useCamperStore';
import { Camper } from '@/types/camper';
import Image from 'next/image';
import styles from './CamperCard.module.css';

const CamperCard = ({ camper }: { camper: Camper }) => {
  const { favorites, toggleFavorite } = useCamperStore();
  const isFavorite = favorites.includes(camper.id);

  return (
    <main>
      <div
        style={{
          position: 'relative',
          width: '292px',
          height: '320px',
        }}
      >
        <Image
          fill
          style={{ objectFit: 'cover', borderRadius: '10px' }}
          src={camper.gallery[0]?.thumb}
          alt={camper.name}
        />
      </div>
      <div>
        <h3>{camper.name}</h3>
        <p>Price: {camper.price.toFixed(2)}</p>
        <div>
          <span>
            <svg className={styles.mapIcon}>
              <use href="/reviews.svg#reviews-filled" />
            </svg>
            {camper.rating}({camper.reviews.length} Reviews)
          </span>
          <span>
            <svg className={styles.mapIcon}>
              <use href="/reviews.svg#map" />
            </svg>
            {camper.location}
          </span>
        </div>
        <button
          onClick={() => toggleFavorite(camper.id)}
          className={styles.favoriteButton}
        >
          <svg className={styles.heartIcon}>
            <use
              href={`/favorites.svg#${isFavorite ? 'heart-filled' : 'heart-outline'}`}
            />
          </svg>
        </button>
      </div>
      <p className={styles.description}>
        {camper.description.length > 100
          ? camper.description.slice(0, 100) + '...'
          : camper.description}
      </p>
      <div className={styles.features}>
        {camper.transmission && (
          <span>
            <svg className={styles.featureIcon}>
              <use href="/campers-sprite.svg#diagram" />
            </svg>
            {camper.transmission}
          </span>
        )}
        {camper.engine && (
          <span>
            <svg className={styles.featureIcon}>
              <use href="/campers-sprite.svg#fuel-pump" />
            </svg>
            {camper.engine}
          </span>
        )}
        {camper.kitchen && (
          <span>
            <svg className={styles.featureIcon}>
              <use href="/campers-sprite.svg#cup-hot" />
            </svg>
            Kitchen
          </span>
        )}
        {camper.AC && (
          <span>
            <svg className={styles.featureIcon}>
              <use href="/campers-sprite.svg#wind" />
            </svg>
            AC
          </span>
        )}
      </div>
      <a href={`/catalog/${camper.id}`}>Show More</a>
    </main>
  );
};
export default CamperCard;
