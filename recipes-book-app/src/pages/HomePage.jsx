import React from "react";
import RecipesList from "../components/RecipesList";

export default function HomePage({ recipes, onDelete }) {

    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <RecipesList recipes={recipes} onDelete={onDelete} />            
        </div>
    )
}