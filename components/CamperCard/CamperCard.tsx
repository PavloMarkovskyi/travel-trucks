import { useCamperStore } from '@/lib/stores/useCamperStore';
import { Camper } from '@/types/camper';
import Image from 'next/image';
import styles from './CamperCard.module.css';
import { formatlable, formatPrice, formatRating } from '@/utils/fomat';

const CamperCard = ({ camper }: { camper: Camper }) => {
  const { favorites, toggleFavorite } = useCamperStore();
  const isFavorite = favorites.includes(camper.id);

  return (
    <main className={styles.main}>
      <div className={styles.cardBox}>
        <div className={styles.cardImg}>
          <Image
            className={styles.image}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            src={camper.gallery[0]?.thumb}
            alt={camper.name}
          />
        </div>
        <div className={styles.cardInfo}>
          <div>
            <div className={styles.cardHead}>
              <p>{camper.name}</p>
              <div className={styles.price}>
                <p>€{formatPrice(camper.price)}</p>
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
            </div>
            <div className={styles.reviews}>
              <span>
                <svg className={styles.reviewIcon}>
                  <use href="/reviews.svg#reviews-filled" />
                </svg>
                {formatRating(camper.rating)} ({camper.reviews.length} Reviews)
              </span>
              <span>
                <svg className={styles.mapIcon}>
                  <use href="/reviews.svg#map" />
                </svg>
                {camper.location}
              </span>
            </div>
          </div>
          <p className={styles.description}>
            {camper.description.length > 50
              ? camper.description.slice(0, 50) + '...'
              : camper.description}
          </p>
          <div className={styles.features}>
            {camper.transmission && (
              <span className={styles.cardIcon}>
                <svg className={styles.featureIcon}>
                  <use href="/campers-sprite.svg#diagram" />
                </svg>
                {formatlable(camper.transmission)}
              </span>
            )}
            {camper.engine && (
              <span className={styles.cardIcon}>
                <svg className={styles.featureIcon}>
                  <use href="/campers-sprite.svg#fuel-pump" />
                </svg>
                {formatlable(camper.engine)}
              </span>
            )}
            {camper.kitchen && (
              <span className={styles.cardIcon}>
                <svg className={styles.featureIcon}>
                  <use href="/campers-sprite.svg#cup-hot" />
                </svg>
                Kitchen
              </span>
            )}
            {camper.AC && (
              <span className={styles.cardIcon}>
                <svg className={styles.featureIcon}>
                  <use href="/campers-sprite.svg#wind" />
                </svg>
                AC
              </span>
            )}
          </div>
          <div>
            <button className={styles.cardBtn}>
              <a href={`/catalog/${camper.id}`}>Show More</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default CamperCard;
