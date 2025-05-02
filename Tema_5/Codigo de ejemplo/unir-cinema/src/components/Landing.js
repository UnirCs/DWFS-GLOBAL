import React, { useState, useEffect } from 'react';
import Pelicula from './Pelicula';
import { movies as moviesMadrid } from '../data/moviesDataMadrid';
import { movies as moviesBarcelona } from '../data/moviesDataBarcelona';
import { movies as moviesValencia } from '../data/moviesDataValencia';

const Landing = ({ city }) => {
    const [movies, setMovies] = useState([]);
    console.log("Renderizando Landing: ", movies);

    useEffect(() => {
        let newMovies = [];
        if (city === 'madrid') {
            newMovies = moviesMadrid;
        } else if (city === 'barcelona') {
            newMovies = moviesBarcelona;
        } else if (city === 'valencia') {
            newMovies = moviesValencia;
        }
        setMovies(newMovies);
    },[city]);

    return (
        <main className="landing">
            {movies.map((movie) => (
                <Pelicula key={movie.id} movie={movie} />
            ))}
        </main>
    );
};

export default Landing;
