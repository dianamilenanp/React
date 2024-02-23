// src/App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://source.unsplash.com/random/200x300');
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      setRandomImage(response.url);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1>Image random</h1>
        
        {randomImage && <img src={randomImage} alt="Imagen aleatoria" />}
      </header>
    </div>
  );
}

export default App;
