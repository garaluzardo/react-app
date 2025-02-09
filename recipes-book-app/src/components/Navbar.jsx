import React from 'react';
import recipesLogo from "../assets/libro.png";

export default function Navbar() {
    return (
      <nav>
        <div className="navbar-logo">
          <img src={recipesLogo} alt="App Logo" />
        </div>
        <div className="navbar-title">
          <h1>Recipes</h1>
        </div>
      </nav>
    );
  }

  