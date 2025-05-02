import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { AuthContext } from '../context/AuthContext';
import { useParams, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(GlobalContext);
    const { user } = useContext(AuthContext);
    const { cinema } = useParams();
    const currentCinema = cinema ? (cinema.charAt(0).toUpperCase() + cinema.slice(1)) : '';
    const cinemas = ["madrid", "barcelona", "valencia", "sevilla"];

    return (
        <header className="header">
            <div className="header__left">
                <h1 className="header__title">
                    Cine Entradas {currentCinema && `- ${currentCinema}`}
                </h1>
            </div>
            <nav className="header__menu">
                {cinemas.map(c => (
                    <Link
                        key={c}
                        to={`/cines/${c}`}
                        className={`header__menu-item ${cinema === c ? "header__menu-item--active" : ""}`}
                    >
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                    </Link>
                ))}
                <div className="header__auth">
                    {user ? (
                        <span className="header__user">Sesión iniciada como {user.displayName}</span>
                    ) : (
                        <Link to="/login" className="header__menu-item">Iniciar sesión</Link>
                    )}
                </div>
                <div className="header__toggle">
                    <label className="switch">
                        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </nav>
        </header>
    );
};

export default Header;
