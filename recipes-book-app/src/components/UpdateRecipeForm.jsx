import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";  // Importamos uuid
import "../App.css";
import recipesData from "../../recipesData.json";

export default function UpdateRecipeForm() {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);
  const [recipes, setRecipes] = useState(recipesData);
  const navigate = useNavigate(); // Para redirigir después de actualizar

  const handleUpdateRecipe = (e) => {
    e.preventDefault();

    // Crear el objeto de la receta actualizada con una nueva id
    const updatedRecipe = {
      id: uuidv4(), // Genera un nuevo UUID en vez de usar Date.now()
      name,
      calories,
      image,
      servings,
    };

    // Actualizar la lista de recetas
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );

    console.log("Receta actualizada:", updatedRecipe);

    // Opcional: Redirigir a otra página
    navigate("/recipes");
  };

  return (
    <div className="update-form">
      <form onSubmit={handleUpdateRecipe}>
        <span>Update Recipe</span>
        <div>
          <label>
            <input
              name="name"
              type="text"
              placeholder="Recipe name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            <input
              name="calories"
              type="text"
              placeholder="How many calories?"
              value={calories}
              onChange={(e) => setCalories(Number(e.target.value))}
            />
          </label>

          <label>
            <input
              name="image"
              type="url"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <label>
            <input
              name="servings"
              type="number"
              placeholder="Servings"
              value={servings}
              onChange={(e) => setServings(Number(e.target.value))}
            />
          </label>
        </div>
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
}
