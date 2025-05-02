import React from 'react';

const Pelicula = ({ movie }) => {
    console.log("Renderizando Pelicula");

    return (
        <div className="movie">
            <h2>{movie.name}</h2>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Actores:</strong> {movie.actors}</p>
            <p><strong>Categorías:</strong> {movie.categories}</p>
            <div className="sessions">
                {movie.sessions.map((session, index) => (
                    <button key={index}>{session}</button>
                ))}
            </div>
        </div>
    );
};

export default Pelicula;
