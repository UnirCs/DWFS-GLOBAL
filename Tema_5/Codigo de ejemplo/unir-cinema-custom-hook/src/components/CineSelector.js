import React from 'react';

const CineSelector = ({ city, onCityChange }) => {
    const handleChange = (e) => {
        onCityChange(e.target.value);
    };

    return (
        <div className="cine-selector">
            <label htmlFor="cine">Selecciona un cine: </label>
            <select id="cine" value={city} onChange={handleChange}>
                <option value="madrid">Madrid</option>
                <option value="barcelona">Barcelona</option>
                <option value="valencia">Valencia</option>
            </select>
        </div>
    );
};

export default CineSelector;
