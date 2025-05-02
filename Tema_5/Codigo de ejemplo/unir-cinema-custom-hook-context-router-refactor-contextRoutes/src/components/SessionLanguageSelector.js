import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './SessionLanguageSelector.css';

const SessionLanguageSelector = () => {
    const { sessionLanguage, changeSessionLanguage } = useContext(GlobalContext);

    const handleChange = (e) => {
        changeSessionLanguage(e.target.value);
    };

    return (
        <div className="session-language-selector">
            <label htmlFor="sessionLanguage" className="session-language-selector__label">
                Filtrar sesiones por idioma:
            </label>
            <select
                id="sessionLanguage"
                className="session-language-selector__select"
                value={sessionLanguage}
                onChange={handleChange}
            >
                <option value="todos">Todos</option>
                <option value="castellano">Castellano</option>
                <option value="vose">VOSE</option>
            </select>
        </div>
    );
};

export default SessionLanguageSelector;
