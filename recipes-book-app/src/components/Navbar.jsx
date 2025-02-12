import React from 'react';
import recipesLogo from "../assets/libro.png";
import '../App.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
          <img src={recipesLogo} alt="App Logo" />
          </Link>
        </div>
        <div className="navbar-title">
        <Link to="/">
          <h1>Recipes</h1>
          </Link>
        </div>
      </nav>
    );
  }  