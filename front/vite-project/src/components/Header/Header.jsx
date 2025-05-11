import React from 'react';
import { useState, useEffect } from 'react';
import '../Header/Header.component.css';

import img167 from '../Header/167.jpg';
import img808 from '../Header/808.jpg';
import img555 from '../Header/555.jpg';
import img666 from '../Header/666.jpg';
import img888 from '../Header/888.jpg';

function Header() {

  const images = [img167, img808, img555, img666, img888]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="carousel-background" 
    style={{
      backgroundImage: `url(${images[currentImageIndex]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity:0.8,
    }}>
      <header className="overlay-content">
        <h1>Bienvenido a Banco Vanguardia</h1>
        <p>Tu confianza, nuestro compromiso.</p>
        
      </header>
    </div>
  );
}

export default Header;
