'use client';
import { Review } from '@/types/camper';

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
              <span>
                {'★'.repeat(reviewer_rating)}
                {'☆'.repeat(5 - reviewer_rating)}
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
