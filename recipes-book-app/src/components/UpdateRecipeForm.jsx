import { useState } from "react";
import React from "react";
import '../App.css';
import recipesData from "../../recipes.json"

export default function UpdateRecipeForm({ currentRecipe, updateRecipe }) {

    // Estados para los campos del formulario con valores por defecto si la receta existe
    const [name, setName] = useState(currentRecipe ? currentRecipe.name : "");
    const [calories, setCalories] = useState(currentRecipe ? currentRecipe.calories : 0);
    const [image, setImage] = useState(currentRecipe ? currentRecipe.image : "");
    const [servings, setServings] = useState(currentRecipe ? currentRecipe.servings : 1);

    // Manejamos la actualización del formulario
    const handleUpdate = e => {
        e.preventDefault();

        // Creamos un objeto con los datos de la receta actualizada
        const updatedRecipe = {
            id: currentRecipe.id,
            name,
            calories,
            image,
            servings,
        };

        // LLamar a la función de actualizar receta
        updateRecipe(updatedRecipe);
    };

    return (
        <div>
        <form onSubmit={handleUpdate}>
            <span>Update Recipe</span>
            <div>
            <label>
            <input name= "name" 
            type="text" 
            placeholder="Recipe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </label>

            <label>
            <input name= "calories"
            type= "text"
            placeholder="calories"
            value={calories}
            onChange={(e) => setCalories(Number(e.target.value))} />
            </label>

            <label>
            <input name= "image" 
            type="url"
            placeholder=""
            value={image}
            onChange={(e) => setImage(e.target.value)} />
            </label>

            <label>
            <input name= "servings" 
            type = "number"
            placeholder="servings"
            value={servings}
            onChange={(e) => setServings(Number(e.target.value))} />
            </label>
            </div> 
            <button type="submit">Update Recipe</button>   
        </form>
        
    </div>
    );
}
