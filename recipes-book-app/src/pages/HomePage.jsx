import React from "react";
import RecipesList from "../components/RecipesList";
import recipesData from "../../recipesData.json";

export default function HomePage() {

    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <RecipesList recipes={recipesData} />
            
        </div>
    )
    
}