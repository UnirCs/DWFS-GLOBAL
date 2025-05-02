import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SeatSelection.css';

const SeatSelection = () => {
    const { cinema, movieId, sessionHour } = useParams();
    const rows = 10;
    const cols = 10;
    const initialSeats = Array.from({ length: rows }, () => Array(cols).fill(false));
    const [seats, setSeats] = useState(initialSeats);

    const toggleSeat = (row, col) => {
        const newSeats = seats.map((r, i) =>
            r.map((seat, j) => (i === row && j === col ? !seat : seat))
        );
        setSeats(newSeats);
    };

    return (
        <div className="seat-selection">
            <h2 className="seat-selection__title">Selecciona tus asientos</h2>
            <div className="seat-selection__info">
                <p><strong>Cine:</strong> {cinema.charAt(0).toUpperCase() + cinema.slice(1)}</p>
                <p><strong>Pelicula ID:</strong> {movieId}</p>
                <p><strong>Hora:</strong> {sessionHour}</p>
            </div>
            <div className="seat-selection__screen">
                Pantalla
            </div>
            <div className="seat-selection__seats">
                {seats.map((row, i) => (
                    <div key={i} className="seat-selection__row">
                        {row.map((seat, j) => (
                            <div
                                key={j}
                                className={`seat-selection__seat ${seat ? 'seat-selection__seat--selected' : ''}`}
                                onClick={() => toggleSeat(i, j)}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className="seat-selection__actions">
                <button>Comprar Entradas</button>
            </div>
            <div className="seat-selection__back">
                <Link to={`/cines/${cinema}/movie/${movieId}`}>
                    <button>Volver a la película</button>
                </Link>
            </div>
        </div>
    );
};

export default SeatSelection;
