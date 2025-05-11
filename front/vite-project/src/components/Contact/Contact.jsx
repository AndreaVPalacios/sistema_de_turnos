import React from "react";
import '../Contact/styles.css'

function Contact(){      
    return (
        <div className="contact-container">
        <div className="left-side">
          <h1>Contáctanos</h1>
          <p>
            Llame al Sistema Automatizado para realizar: consultas de saldos, pagos, 
            transferencias, operaciones de cheques (conformación, activación, suspensión), 
            reclamos, autorizaciones de tarjetas de créditos, entre otras operaciones.
          </p>
        </div>
        <div className="right-side">
          <div className="contact-card">
            <h3>Venezuela</h3>
            <p>+58 000 000 0000</p>
          </div>
          <div className="contact-card">
            <h3>Panamá</h3>
            <p>+507 000 0000</p>
          </div>
          <div className="contact-card">
            <h3>España</h3>
            <p>+34 000 000 000</p>
          </div>
          <div className="contact-card">
            <h3>Correos Electrónicos</h3>
            <p>email@bancovanguardia.com</p>
            <p>aguilera.corporative@gmail.com</p>
          </div>
        </div>
      </div>
    );
}

export default Contact
