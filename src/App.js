// App.js
import React from 'react';
import ThemeProvider from './ThemeProvider';
import Header from './Header';
import "./App.css";
const App = () => {
  return (
    <div className='App'>
    <ThemeProvider>
      <Header />
    </ThemeProvider>
    </div>
  );
};

export default App;

