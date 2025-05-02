import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const cinemas = ['madrid', 'barcelona', 'valencia', 'sevilla'];

    return (
        <div className="home-page">
            <h2 className="home-page__title">Seleccione el cine al que desea acceder:</h2>
            <div className="home-page__cinema-buttons">
                {cinemas.map((cinema) => (
                    <Link key={cinema} to={`/cines/${cinema}`}>
                        <button className="home-page__cinema-button">
                            {cinema.charAt(0).toUpperCase() + cinema.slice(1)}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
