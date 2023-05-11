import { useEffect, useState } from 'react';

import { TImage } from '../types';

export const useImages = ():TImage[] | null => {
  const [images, setImages] = useState<TImage[] | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      try {
        const images= await fetch(
          'http://localhost:3000/images',
        ).then((res) => res.json());

        setImages(images);
      } catch (error) {
        console.error(error);
      }
    }

    fetchImages();
  }, []);

  return images;
}