import React from "react";
import { useParams } from "react-router-dom";

export default function ItemDetailsPage({ recipes }) {
    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === Number(id));

    if (!recipe) {
        return <h2>Receta no encontrada</h2>;
    }

    return (
        <div className="recipe-details">
            <h1>{recipe.name}</h1>
            <p>Calorías: {recipe.calories}</p>
            <img src={recipe.image} alt={recipe.name} />
            <p>Porciones: {recipe.servings}</p>
            <button>Editar Receta</button>
        </div>
    );
}