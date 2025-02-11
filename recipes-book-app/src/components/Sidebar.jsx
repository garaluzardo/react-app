import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
           {/*  <img src="../assets/menu-icon.png"></img> */}
            <ul>
                <li>About Us</li>
                <li>Lista de Recetas(RecipeList)</li>
                <li>Detalles de Recetas(RecipesCard)</li>
                <li>
                <Link to="/add-recipe">Agregar Receta</Link>
                </li>

            </ul>
        </div>
    );
}