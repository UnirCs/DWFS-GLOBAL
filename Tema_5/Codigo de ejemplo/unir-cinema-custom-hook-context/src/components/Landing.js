import React, { useContext } from 'react';
import Pelicula from './Pelicula';
import useMovies from '../hooks/useMovies';
import { GlobalContext } from '../context/GlobalContext';

const Landing = () => {
    const { city } = useContext(GlobalContext);
    const { movies, loading } = useMovies(city);

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
            {movies.map((movie) => (
                <Pelicula key={movie.id} movie={movie} />
            ))}
        </main>
    );
};

export default Landing;
