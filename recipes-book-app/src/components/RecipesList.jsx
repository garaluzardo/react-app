import React, {useState} from 'react';
import RecipesCard from './RecipesCard';
import recipesData from "../../recipesData.json";
import '../App.css';

export default function RecipesList ({recipes, onDelete}) {

    return (
        <div className="recipes-list">
            {recipes.map(recipe => (
            <RecipesCard key={recipe.id} recipe={recipe} onDelete={onDelete}/>
            ))}
        </div>
    );
}

