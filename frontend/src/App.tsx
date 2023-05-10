import React, { useState } from 'react';

import './App.css';
import { Carousel } from './components/Carousel';
import { Gallery } from './components/Gallery';

function App() {
  const [isGallery, setIsGallery] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setIsGallery(!isGallery)}>Show {isGallery ? 'Carousel': 'Gallery'}</button>
      {isGallery ? <Gallery/> : <Carousel/>}
    </div>
  );
}

export default App;
