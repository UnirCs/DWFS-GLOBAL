import React from 'react';
import { useParams } from 'react-router-dom';
import Pelicula from './Pelicula';
import useMovies from '../hooks/useMovies';
import SessionLanguageSelector from './SessionLanguageSelector';
import './Landing.css';

const Landing = () => {
    const { cinema } = useParams();
    const { movies, loading } = useMovies(cinema);

    if (loading) {
        return (
            <main className="landing">
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Cargando...</p>
                </div>
            </main>
        );
    }

    return (
        <main className="landing">
            <SessionLanguageSelector />
            {movies.map((movie) => (
                <Pelicula key={movie.id} movie={movie} cinema={cinema} />
            ))}
        </main>
    );
};

export default Landing;
