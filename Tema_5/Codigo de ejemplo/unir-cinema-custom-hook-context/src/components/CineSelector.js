import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const CineSelector = () => {
    const { city, changeCity } = useContext(GlobalContext);

    const handleChange = (e) => {
        changeCity(e.target.value);
    };

    return (
        <div className="cine-selector">
            <label htmlFor="cine">Selecciona un cine: </label>
            <select id="cine" value={city} onChange={handleChange}>
                <option value="madrid">Madrid</option>
                <option value="barcelona">Barcelona</option>
                <option value="valencia">Valencia</option>
                <option value="sevilla">Sevilla</option>
            </select>
        </div>
    );
};

export default CineSelector;
