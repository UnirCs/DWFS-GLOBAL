import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import './Pelicula.css';

const Pelicula = ({ movie, cinema }) => {
    const { sessionLanguage } = useContext(GlobalContext);

    const filteredSessions = sessionLanguage === "todos"
        ? movie.sessions
        : movie.sessions.filter(session => session.language === sessionLanguage);

    return (
        <div className="movie">
            <h2 className="movie__title">
                <Link to={`/cines/${cinema}/movie/${movie.id}`} className="movie__link">
                    {movie.name}
                </Link>
            </h2>
            <p className="movie__details"><strong>Director:</strong> {movie.director}</p>
            <p className="movie__details"><strong>Actores:</strong> {movie.actors}</p>
            <p className="movie__details"><strong>Categorías:</strong> {movie.categories}</p>
            <div className="movie__sessions">
                {filteredSessions.map((session, index) => (
                    <Link key={index} to={`/cines/${cinema}/movie/${movie.id}/session/${encodeURIComponent(session.hour)}`}>
                        <button className="movie__session-button">
                            {session.hour} ({session.language})
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Pelicula;
