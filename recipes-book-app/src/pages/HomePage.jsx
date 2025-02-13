import React from "react";
import RecipesList from "../components/RecipesList";

export default function HomePage({ recipes, onDelete }) {
    return (
        <div className="home-page">
            <RecipesList recipes={recipes} onDelete={onDelete} />            
        </div>
    )
}