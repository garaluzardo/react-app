import React from 'react';
import '../App.css';
import RecipesList from './RecipesList';
import { Link } from 'react-router-dom';

export default function RecipesCard({ recipe, onDelete }) {
    return (
        <div className="recipes-card">
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.name} />
            <button onClick={() => onDelete(recipe.id)}>Eliminar Receta</button>
            <Link to={`/recipe-detail/${recipe.id}`}>
                <button>Ver más</button>
            </Link>
        </div>
    );
}