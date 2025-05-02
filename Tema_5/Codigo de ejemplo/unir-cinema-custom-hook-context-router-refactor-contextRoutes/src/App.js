import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Landing from './views/Landing';
import MovieDetails from './views/MovieDetails';
import SeatSelection from './views/SeatSelection';
import AboutUs from './views/AboutUs';
import CinemaDetail from './views/CinemaDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalProvider, GlobalContext } from './context/GlobalContext';
import PrivateRoute from "./components/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";
import Login from "./views/Login";

function AppContent() {
    const { darkMode } = useContext(GlobalContext);
    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre-nosotros" element={<AboutUs />} />
                <Route path="/cines/:cinema" element={<Landing />} />
                <Route path="/cines/:cinema/detalle" element={<CinemaDetail />} />
                <Route path="/cines/:cinema/movie/:movieId" element={<MovieDetails />} />
                <Route path="/cines/:cinema/movie/:movieId/session/:sessionHour" element={
                    <PrivateRoute>
                        <SeatSelection />
                    </PrivateRoute>
                } />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <GlobalProvider>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </GlobalProvider>
    );
}

export default App;
