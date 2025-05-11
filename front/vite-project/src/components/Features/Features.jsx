import React from 'react';
import '../Features/Features.component.css';

function Features() {
  return (
    <section className="features">
      <div className="feature">
        <h2>Seguridad</h2>
        <p>Garantizamos la protección de tus activos.</p>
      </div>
      <div className="feature">
        <h2>Innovación</h2>
        <p>Las mejores soluciones tecnológicas para ti.</p>
      </div>
      <div className="feature">
        <h2>Atención Personalizada</h2>
        <p>Nos adaptamos a tus necesidades.</p>
      </div>
    </section>
  );
}

export default Features
