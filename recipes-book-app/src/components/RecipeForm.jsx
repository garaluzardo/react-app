import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import recipesData from "../../recipesData.json"

export default function RecipeForm({ onAddRecipe }) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [instructions, setInstructions] = useState("");
    const [servings, setServings] = useState("");

    const handleAddRecipe = (e) => {
        e.preventDefault();

        const newRecipe = {
            name,
            calories,
            image,
            instructions,
            servings
        };

        console.log("Nueva receta agregada:", newRecipe);

        onAddRecipe(newRecipe)

        // Aquí limpiamos los valores después de agregar nueva receta   
        setName("");
        setCalories(0);
        setImage("");
        setInstructions("");
        setServings(0);
    };

    return (
        <div className="add-form">
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
                            onChange={(e) => setCalories(e.target.value)} />
                    </label>

                    <label>
                        <input name="image"
                            type="url"
                            placeholder="Your URL here"
                            value={image}
                            onChange={(e) => setImage(e.target.value)} />
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
                        
                        <input name="servings"
                            type="number"
                            placeholder="servings"
                            value={servings}
                            onChange={(e) => setServings(e.target.value)} />
                    </label>

                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    )
}