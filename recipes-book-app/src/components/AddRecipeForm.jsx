import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import recipesData from "../../recipes.json"

export default function AddRecipeForm({onAddRecipe}) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState("");
    const [servings, setServings] = useState(0);
    const [recipes, setRecipes] = useState(recipesData);

    const handleAddRecipe = (e) => {
        e.preventDefault();

        const newRecipe = {

            /*cada nueva receta tiene que tener un id unico como en el json???? */
            id: Date.now(),  // Asignamos un ID único basado en el timestamp
            name,
            calories,
            image,
            servings
        };

        console.log("Nueva receta agregada:", newRecipe);
        
        onAddRecipe(newRecipe)

        // Aquí limpiamos los valores después de agregar nueva receta   
        setName("");
        setCalories(0);
        setImage("");
        setServings(0);
    };

    return (
        <div>
            <form onSubmit={handleAddRecipe}>
                <span>New Recipe</span>
                <div>
                    <label>
                        <input name="name"
                            type="text"
                            placeholder="Recipe name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label>
                        <input name="calories"
                            type="text"
                            placeholder="How many calories?"
                            value={calories}
                            onChange={(e) => setCalories(Number(e.target.value))} />
                    </label>

                    <label>
                        <input name="image"
                            type="url"
                            placeholder=""
                            value={image}
                            onChange={(e) => setImage(e.target.value)} />
                    </label>

                    <label>
                        <input name="servings"
                            type="number"
                            placeholder="servings"
                            value={servings}
                            onChange={(e) => setServings(Number(e.target.value))} />
                    </label>

                </div>
                <button type="submit">Add Recipe</button>  
            </form>
        </div>
    )
}
