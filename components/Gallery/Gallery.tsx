import Image from 'next/image';

interface Props {
  images: { thumb: string; original: string }[];
}

const Gallery = ({ images }: Props) => {
  return (
    <div>
      {images.map((src, index) => (
        <div
          style={{
            position: 'relative',
            width: '292px',
            height: '320px',
          }}
          key={index}
        >
          <Image
            src={src.thumb}
            alt={`Camper image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index === 0}
          ></Image>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
