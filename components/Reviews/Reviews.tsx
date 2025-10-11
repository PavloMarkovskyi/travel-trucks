'use client';
import { Review } from '@/types/camper';
import styles from './Reviews.module.css';
interface Props {
  reviews: Review[];
}

const Reviews = ({ reviews }: Props) => {
  if (!reviews || reviews.length === 0) {
    return <div>No reviews yet</div>;
  }
  return (
    <section>
      <ul>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <li key={index}>
            <div>
              <div>{reviewer_name.charAt(0).toUpperCase()}</div>
              <span>{reviewer_name}</span>
              <span className={styles.rating}>
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className={styles.retingIcon}>
                    <use
                      href={
                        index < reviewer_rating
                          ? '/reviews.svg#reviews-filled'
                          : '/reviews.svg#reviews'
                      }
                    />
                  </svg>
                ))}
              </span>
            </div>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
