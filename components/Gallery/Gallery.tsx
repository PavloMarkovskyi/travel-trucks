import Image from 'next/image';
import styles from './Gallery.module.css';
interface Props {
  images: { thumb: string; original: string }[];
}

const Gallery = ({ images }: Props) => {
  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <div className={styles.galleryBox} key={index}>
          <Image
            className={styles.galleryImg}
            src={src.thumb}
            alt={`Camper image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
            priority={index === 0}
          ></Image>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
