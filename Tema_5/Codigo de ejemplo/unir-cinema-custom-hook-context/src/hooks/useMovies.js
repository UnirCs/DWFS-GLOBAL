import { useState, useEffect } from 'react';
import axios from 'axios';
import { movies as moviesMadrid } from '../data/moviesDataMadrid';
import { movies as moviesBarcelona } from '../data/moviesDataBarcelona';
import { movies as moviesValencia } from '../data/moviesDataValencia';
import { movies as moviesSevilla } from '../data/moviesDataSevilla';

const useMovies = (city) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                // Simulación de retardo de 2 segundos
                await new Promise(resolve => setTimeout(resolve, 2000));
                const response = await axios.get(`https://unir-cinema.net/movies?cinema=${city}`);
                setMovies(response.data);
            } catch (error) {
                let fallbackMovies = [];
                if (city === 'madrid') {
                    fallbackMovies = moviesMadrid;
                } else if (city === 'barcelona') {
                    fallbackMovies = moviesBarcelona;
                } else if (city === 'valencia') {
                    fallbackMovies = moviesValencia;
                } else if (city === 'sevilla') {
                    fallbackMovies = moviesSevilla;
                }
                setMovies(fallbackMovies);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [city]);

    return { movies, loading };
};

export default useMovies;
