import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import { GlobalContext } from '../context/GlobalContext';
import './MovieDetails.css';

const MovieDetails = () => {
    const { cinema, movieId } = useParams();
    const { movies, loading } = useMovies(cinema);
    const { sessionLanguage } = useContext(GlobalContext);

    if (loading) {
        return (
            <div className="movie-details">
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Cargando...</p>
                </div>
            </div>
        );
    }

    const movie = movies.find(m => m.id.toString() === movieId);
    if (!movie) {
        return <div className="movie-details">Pelicula no encontrada.</div>;
    }

    const filteredSessions = sessionLanguage === "todos"
        ? movie.sessions
        : movie.sessions.filter(session => session.language === sessionLanguage);

    return (
        <div className="movie-details">
            <h2 className="movie-details__title">{movie.name}</h2>
            <div className="movie-details__trailer">
                <iframe
                    width="100%"
                    height="360"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="movie-details__info">
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Actores:</strong> {movie.actors}</p>
                <p><strong>Categorías:</strong> {movie.categories}</p>
            </div>
            <div className="movie-details__sessions">
                {filteredSessions.map((session, index) => (
                    <Link key={index} to={`/cines/${cinema}/movie/${movie.id}/session/${encodeURIComponent(session.hour)}`}>
                        <button className="movie-details__session-button">
                            {session.hour} ({session.language})
                        </button>
                    </Link>
                ))}
            </div>
            <div className="movie-details__back">
                <Link to={`/cines/${cinema}`}>
                    <button>Volver a la lista</button>
                </Link>
            </div>
        </div>
    );
};

export default MovieDetails;
