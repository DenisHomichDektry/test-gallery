import { FC, useState } from 'react';

import { TImage } from '../../types';
import './style.css';

interface ICarouselProps {
  images: TImage[]
}

export const Carousel: FC<ICarouselProps> = (props) => {
  const { images } = props;

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="carousel-root">
      <div className="carousel-paper">
        <div className="img-nav-box">
          <button
            className="button"
            disabled={currentImage === 0}
            onClick={() => setCurrentImage(currentImage - 1)}
          >
            &#10094;
          </button>
          <div className="img-box">
            <div className="img-container">
              {images.map((image, index) => (
                <div key={image.id + image.albumId + index} style={{
                  transform: `translateX(${- currentImage * 100}%)`,
                }}>
                  <img  src={image.url || image.path} alt={image.title} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="button"
            disabled={currentImage === images.length - 1}
            onClick={() => setCurrentImage(currentImage + 1)}
          >
            &#10095;
          </button>
        </div>
        <div className="dots-box">
          {images.map((image, index) => (
            <div
              key={image.id + image.albumId + index}
              style={{backgroundColor: currentImage === index ? '#b6e903': '#616e70'}}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}