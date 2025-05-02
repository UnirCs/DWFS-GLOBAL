import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Landing from './components/Landing';
import MovieDetails from './components/MovieDetails';
import SeatSelection from './components/SeatSelection';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalProvider, GlobalContext } from './context/GlobalContext';

function AppContent() {
    const { darkMode } = useContext(GlobalContext);
    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cines/:cinema" element={<Landing />} />
                <Route path="/cines/:cinema/movie/:movieId" element={<MovieDetails />} />
                <Route path="/cines/:cinema/movie/:movieId/session/:sessionHour" element={<SeatSelection />} />
            </Routes>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <GlobalProvider>
            <AppContent />
        </GlobalProvider>
    );
}

export default App;
