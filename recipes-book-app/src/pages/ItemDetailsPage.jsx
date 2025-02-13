import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ItemDetailsPage({ recipes }) {
  const { id } = useParams();
  console.log("ID recibido:", id);
  const [recipe, setRecipe] = useState(null);

  // Aseguramos que el estado de la receta se actualice al cambiar el ID
  useEffect(() => {
    console.log("ID recibido:", id);
    const foundRecipe = recipes.find((r) => r.id.toString() === (id));
    setRecipe(foundRecipe || null); // Si no se encuentra, setRecipe null
  }, [id, recipes]); // Dependemos de 'id' y 'recipes' para obtener la receta correcta

  if (!recipe) {
    return <h2 className="not-found">Receta no encontrada</h2>;
  }

  return (
    <div className="item-details-page">
      <h1>{recipe.name}</h1>
      <p>Calorías: {recipe.calories}</p>
      <img src={recipe.image || null} alt={recipe.name} />
      <p>{recipe.instructions}</p>
      <p>Porciones: {recipe.servings}</p>
      <Link to={`/update-recipe/${recipe.id}`}>
      <button>Update</button>
      </Link>
    </div>
  );
}