import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/" >Recipes</Link>
                </li>
                <li>
                    <Link to="/add-recipe" >Add Recipe</Link>
                </li>
                <li>
                    <Link to="/about-page" >About us</Link>
                </li>
            </ul>
        </div>
    );
}