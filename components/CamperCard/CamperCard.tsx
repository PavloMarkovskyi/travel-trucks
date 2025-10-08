import { useCamperStore } from '@/lib/stores/useCamperStore';
import { Camper } from '@/types/camper';

const CamperCard = ({ camper }: { camper: Camper }) => {
  const { favorites, toggleFavorite } = useCamperStore();

  return (
    <div>
      <img src={camper.gallery[0]?.thumb} alt={camper.name} />
      <h3>{camper.name}</h3>
      <p>Price: {camper.price.toFixed(2)}</p>
      <p>Location: {camper.location}</p>
      <button onClick={() => toggleFavorite(camper.id)}>
        {favorites.includes(camper.id) ? '★' : '☆'} Favorite
      </button>
      <a href={`/catalog/${camper.id}`}>Show More</a>
    </div>
  );
};
export default CamperCard;
