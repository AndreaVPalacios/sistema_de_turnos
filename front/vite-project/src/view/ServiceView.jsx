import React from 'react';
import ServiceComp from '../components/ServicesComp/ServicesComp';

const services = [
    { title: 'Préstamos personales y créditos al consumo', description: 'Te ofrecemos tasas competitivas para tus necesidades personales.' },
    { title: 'Préstamos hipotecarios', description: 'Financia tu vivienda con condiciones favorables.' },
    { title: 'Aspectos básicos sobre los tipos de interés', description: 'Entiende cómo afectan los tipos de interés a tus finanzas.' },
    { title: 'Adeudos, cajeros, tarjetas y transferencias', description: 'Gestiona tu dinero de manera eficiente con nuestras soluciones.' },
    { title: 'Cuentas corrientes y libretas de ahorro', description: 'Ahorra y maneja tu dinero con seguridad.' },
    { title: 'Depósitos a plazo', description: 'Maximiza el rendimiento de tu capital a largo plazo.' },
    { title: 'Efectivos y cheques bancarios', description: 'Soluciones fáciles para el manejo de dinero en efectivo y cheques.' },
    { title: 'Avales', description: 'Garantías para tus transacciones importantes.' }
];

const ServiceView = () => {
    return (
        <div className="services-container">
            <h1 className="services-title">Servicios</h1>
            <p className="services-description">
                Descubre las ventajas de nuestros servicios, diseñados para cubrir todas tus necesidades financieras con confianza y facilidad.
            </p>
            <div className="services-list">
                {services.map((service, index) => (
                    <ServiceComp key={index} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ServiceView;
