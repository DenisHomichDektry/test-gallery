import { FC } from 'react';

import { TImage } from '../../types';
import './style.css';

interface IGalleryProps {
  images: TImage[]
}

export const Gallery: FC<IGalleryProps> = (props) => {
  const { images } = props;

  return (
    <div className="gallery-root">
      {images.map((image, index) => (
        <div key={image.id + image.albumId + index} className="gallery-item">
          <img  src={image.url || image.path} alt={image.title} />
          <p title={image.title}>{image.title}</p>
        </div>
      ))}
    </div>
  )
}