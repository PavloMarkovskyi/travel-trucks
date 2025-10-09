import { Camper } from '@/types/camper';
import { formatPrice, formatRating } from '@/utils/fomat';

interface Props {
  camper: Camper;
}

const CamperHeader = ({ camper }: Props) => {
  return (
    <div>
      <h1>{camper.name}</h1>
      <div>
        <p>
          {' '}
          ★ {formatRating(camper.rating)} ({camper.reviews.length} Reviews)
        </p>
        <p>{camper.location}</p>
      </div>
      <p>{formatPrice(camper.price)}</p>
    </div>
  );
};

export default CamperHeader;
