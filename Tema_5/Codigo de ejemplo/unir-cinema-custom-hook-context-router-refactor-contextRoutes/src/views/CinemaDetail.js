import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CinemaDetail.css';

const CinemaDetail = () => {
    const { cinema } = useParams();
    const capitalizedCinema = cinema ? (cinema.charAt(0).toUpperCase() + cinema.slice(1)) : '';

    // Información de ejemplo; en una aplicación real se obtendría de una API o de datos estáticos.
    const details = {
        madrid: {
            opened: "1990",
            halls: 8,
            address: "Calle Mayor, 10, Madrid"
        },
        barcelona: {
            opened: "1995",
            halls: 6,
            address: "La Rambla, 20, Barcelona"
        },
        valencia: {
            opened: "2000",
            halls: 5,
            address: "Avenida de las Cortes Valencianas, 15, Valencia"
        },
        sevilla: {
            opened: "2005",
            halls: 7,
            address: "Calle Sierpes, 5, Sevilla"
        }
    };

    const cinemaInfo = details[cinema] || {
        opened: "Desconocido",
        halls: "Desconocido",
        address: "Desconocido"
    };

    return (
        <div className="cinema-detail">
            <h2 className="cinema-detail__title">Detalle del Cine {capitalizedCinema}</h2>
            <p className="cinema-detail__info"><strong>Fecha de apertura:</strong> {cinemaInfo.opened}</p>
            <p className="cinema-detail__info"><strong>Número de salas:</strong> {cinemaInfo.halls}</p>
            <p className="cinema-detail__info"><strong>Dirección:</strong> {cinemaInfo.address}</p>
            <div className="cinema-detail__back">
                <Link to={`/cines/${cinema}`}>
                    <button className="cinema-detail__back-button">Volver a la Landing</button>
                </Link>
            </div>
        </div>
    );
};

export default CinemaDetail;
