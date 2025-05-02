import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <h2 className="about-us__title">Sobre Nosotros</h2>
            <p className="about-us__text">
                Somos una cadena de cines con más de 20 años de experiencia, operando en las principales ciudades de España.
            </p>
            <p className="about-us__text">
                Contamos con salas de última generación, asientos cómodos y la mejor experiencia audiovisual.
            </p>
            <p className="about-us__text">
                Nuestro compromiso es ofrecer entretenimiento de calidad y servicio excepcional.
            </p>
        </div>
    );
};

export default AboutUs;