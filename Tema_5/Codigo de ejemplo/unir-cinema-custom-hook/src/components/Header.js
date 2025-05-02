import React from 'react';

const Header = ({ city }) => {
    // Capitalizamos la ciudad para mostrarla correctamente
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    return (
        <header>
            <h1>Cine Entradas - {capitalizedCity}</h1>
        </header>
    );
};

export default Header;
