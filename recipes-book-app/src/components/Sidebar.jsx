import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/about-page">About</Link>
                </li>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/add-recipe">Agregar Receta</Link>
                </li>

            </ul>
        </div>
    );
}