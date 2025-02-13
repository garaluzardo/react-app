import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

export default function UpdateRecipeForm({ recipes, onUpdateRecipe }) {
  const { id } = useParams(); // Obtenemos el ID de la receta desde la URL
  const navigate = useNavigate(); //Creamos una función de navegación

  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [instructions, setInstructions] = useState("");
  const [servings, setServings] = useState(0);

  // Pre-cargar los datos de la receta al montar el componente
  useEffect(() => {
    const recipeToUpdate = recipes.find((recipe) => recipe.id === id);
    if (recipeToUpdate) {
      setName(recipeToUpdate.name);
      setCalories(recipeToUpdate.calories);
      setImage(recipeToUpdate.image);
      setInstructions(recipeToUpdate.instructions);
      setServings(recipeToUpdate.servings);
    }
  }, [id, recipes]);

  // Manejar la actualización de la receta
  const handleUpdateRecipe = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      id,
      name,
      calories,
      image,
      instructions,
      servings,
    };

    onUpdateRecipe(updatedRecipe); // Actualizar receta
    navigate(`/recipe-detail/${id}`); // Redirigir a recipe-details

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
            <textarea
              name="instructions"
              type="text"
              placeholder="Write more info "
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
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