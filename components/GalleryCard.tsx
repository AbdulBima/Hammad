import React from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface DynamicImageGridProps {
  images: ImageProps[];
}

const GalleryCard: React.FC<DynamicImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="group cursor-pointer relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-48 object-cover  transition-transform transform scale-100 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryCard;
