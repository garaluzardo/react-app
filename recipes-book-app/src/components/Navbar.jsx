import React from 'react';
import recipesLogo from "../assets/libro.png";
import '../App.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <nav className="navbar">
          <Link to="/">
          <img src={recipesLogo} alt="App Logo" />
          </Link>
        <Link to="/">
        <h1><span className="light-text">recipe</span>journal</h1>
          </Link>
      </nav>
    );
  }