// Header.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
      }}
    >
      <h1>Theme is {theme}</h1>
      <button onClick={toggleTheme} className='btn'>Toggle Theme</button>
    </header>
  );
};

export default Header;
