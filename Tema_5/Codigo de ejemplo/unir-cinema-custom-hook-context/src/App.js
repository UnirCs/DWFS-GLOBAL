import React, { useContext } from 'react';
import { GlobalProvider, GlobalContext } from './context/GlobalContext';
import Header from './components/Header';
import CineSelector from './components/CineSelector';
import Landing from './components/Landing';
import Footer from './components/Footer';

function AppContent() {
    const { darkMode } = useContext(GlobalContext);
    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <Header />
            <CineSelector />
            <Landing />
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
