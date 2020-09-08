import React from 'react';
import './App.css';
import logo from './feather.svg';
import ToutDouxList from './Components/ToutDouxList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="feather" />
        <h1>Bienvenue !</h1>
        <ToutDouxList/>
      </header>
    </div>
  );
}

export default App;
