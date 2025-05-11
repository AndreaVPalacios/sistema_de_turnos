import React from 'react';
import './styles.css';

const ServiceComp = ({ service }) => {
    return (
        <div className="service-item">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
        </div>
    );
};

export default ServiceComp;
