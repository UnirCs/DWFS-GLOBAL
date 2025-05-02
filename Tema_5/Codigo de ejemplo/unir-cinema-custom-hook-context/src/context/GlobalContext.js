import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [city, setCity] = useState('madrid');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const changeCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <GlobalContext.Provider value={{ city, darkMode, toggleDarkMode, changeCity }}>
      {children}
    </GlobalContext.Provider>
  );
};
