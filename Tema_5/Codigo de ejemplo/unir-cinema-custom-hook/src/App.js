import React, { useState } from 'react';
import Header from './components/Header';
import CineSelector from './components/CineSelector';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
    const [city, setCity] = useState('madrid'); // Ciudad por defecto

    const handleCityChange = (newCity) => {
        setCity(newCity);
    };

    return (
        <div className="App">
            <Header city={city} />
            <CineSelector city={city} onCityChange={handleCityChange} />
            <Landing city={city} />
            <Footer />
        </div>
    );
}

export default App;
