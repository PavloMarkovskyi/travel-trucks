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
    <section className={styles.wrapper}>
      <ul className={styles.reviewList}>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <li className={styles.reviewItem} key={index}>
            <div className={styles.reviewer}>
              <div className={styles.reviewerAvatar}>
                {reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div className={styles.reviewerName}>
                <p>{reviewer_name}</p>
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
            </div>
            <p className={styles.reviewComment}>{comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
