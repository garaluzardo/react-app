import React, {useState} from 'react';
import ListItem from './ListItem';
import recipes from "../../recipes.json";

export default function List () {
    const [recipesList, setRecipesList] = useState(recipes);

    const deleteItem = (id) => {
        setRecipesList(recipesList.filter(recipe => recipe.id !== id));
    }

    return (
        <div className="list">
            {recipesList.map(recipe => (
            <ListItem key={recipe.id} recipe={recipe} onDelete={deleteItem}/>
            ))}
        </div>
    );
}