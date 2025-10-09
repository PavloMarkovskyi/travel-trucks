import { useCamperStore } from '@/lib/stores/useCamperStore';
import { Camper } from '@/types/camper';
import Image from 'next/image';

const CamperCard = ({ camper }: { camper: Camper }) => {
  const { favorites, toggleFavorite } = useCamperStore();

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
      <h3>{camper.name}</h3>
      <p>Price: {camper.price.toFixed(2)}</p>
      <p>Location: {camper.location}</p>
      <button onClick={() => toggleFavorite(camper.id)}>
        {favorites.includes(camper.id) ? '★' : '☆'} Favorite
      </button>
      <a href={`/catalog/${camper.id}`}>Show More</a>
    </main>
  );
};
export default CamperCard;
