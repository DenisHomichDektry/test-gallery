import { FC, useState } from 'react';

import { TImage } from '../../types';
import './style.css';

interface ICarouselProps {
  images: TImage[]
}

export const Carousel: FC<ICarouselProps> = (props) => {
  const { images } = props;

  const [currentImage, setCurrentImage] = useState(1);

  const handleNav = (direction: string) => {
    if (direction === 'left') {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  return (
    <div className="carousel-root">
      <div className="carousel-paper">
        <div className="img-nav-box">
          <button onClick={() => handleNav('left')}>{'<'}</button>
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
          <button onClick={() => handleNav('right')}>{'>'}</button>
        </div>
        <div className="dots-box">
          <h1>dots...</h1>
        </div>
      </div>
    </div>
  )
}