export const movies = [
    {
        id: 1,
        name: "Inception",
        director: "Christopher Nolan",
        actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
        categories: "Acción, Ciencia Ficción",
        sessions: [
            { hour: "14:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "17:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "20:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
        ]
    },
    {
        id: 2,
        name: "The Matrix",
        director: "The Wachowskis",
        actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        categories: "Acción, Ciencia Ficción",
        sessions: [
            { hour: "15:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "18:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "21:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
        ]
    },
    {
        id: 3,
        name: "Interstellar",
        director: "Christopher Nolan",
        actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        categories: "Aventura, Drama, Ciencia Ficción",
        sessions: [
            { hour: "13:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "16:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "19:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
        ]
    },
    {
        id: 4,
        name: "Parasite",
        director: "Bong Joon-ho",
        actors: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
        categories: "Thriller, Drama, Comedia",
        sessions: [
            { hour: "12:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "15:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "18:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
        ]
    },
    {
        id: 5,
        name: "The Shawshank Redemption",
        director: "Frank Darabont",
        actors: "Tim Robbins, Morgan Freeman",
        categories: "Drama",
        sessions: [
            { hour: "14:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "17:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "20:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
        ]
    }
];
