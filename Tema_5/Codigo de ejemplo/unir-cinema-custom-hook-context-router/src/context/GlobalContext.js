import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sessionLanguage, setSessionLanguage] = useState("todos");

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const changeSessionLanguage = (newLanguage) => {
    setSessionLanguage(newLanguage);
  };

  return (
      <GlobalContext.Provider value={{ darkMode, sessionLanguage, toggleDarkMode, changeSessionLanguage }}>
        {children}
      </GlobalContext.Provider>
  );
};
