import React, { useState } from 'react';

import './App.css';
import { Carousel } from './components/Carousel';
import { Gallery } from './components/Gallery';
import { useImages } from './hooks/useImages';

function App() {
  const [isGallery, setIsGallery] = useState(true)

  const images = useImages()

  return (
    <div className="App">
      <button onClick={() => setIsGallery(!isGallery)}>Show {isGallery ? 'Carousel': 'Gallery'}</button>
      {images ? isGallery ? <Gallery images={images}/> : <Carousel images={images}/> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
