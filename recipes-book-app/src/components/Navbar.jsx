import React from 'react';
import recipesLogo from "../assets/libro.png";
import '../App.css';

export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={recipesLogo} alt="App Logo" />
        </div>
        <div className="navbar-title">
          <h1>Recipes</h1>
        </div>
      </nav>
    );
  }

  