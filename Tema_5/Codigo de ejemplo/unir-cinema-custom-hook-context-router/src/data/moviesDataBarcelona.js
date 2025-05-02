export const movies = [
    {
        id: 1,
        name: "La La Land",
        director: "Damien Chazelle",
        actors: "Ryan Gosling, Emma Stone",
        categories: "Musical, Romance",
        sessions: [
            { hour: "13:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "16:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "19:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
        ]
    },
    {
        id: 2,
        name: "Avatar",
        director: "James Cameron",
        actors: "Sam Worthington, Zoe Saldana",
        categories: "Acción, Ciencia Ficción",
        sessions: [
            { hour: "14:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "18:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "22:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
        ]
    },
    {
        id: 3,
        name: "The Godfather",
        director: "Francis Ford Coppola",
        actors: "Marlon Brando, Al Pacino",
        categories: "Crimen, Drama",
        sessions: [
            { hour: "15:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "19:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "23:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
        ]
    },
    {
        id: 4,
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
        categories: "Crimen, Drama",
        sessions: [
            { hour: "12:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "15:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "18:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
        ]
    },
    {
        id: 5,
        name: "Amélie",
        director: "Jean-Pierre Jeunet",
        actors: "Audrey Tautou, Mathieu Kassovitz",
        categories: "Comedia, Romance",
        sessions: [
            { hour: "11:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "14:00", language: Math.random() < 0.5 ? "castellano" : "vose" },
            { hour: "17:00", language: Math.random() < 0.5 ? "castellano" : "vose" }
        ]
    }
];
