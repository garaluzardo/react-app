import React, {useState} from 'react';
import ListItem from './ListItem';
import recipes from "../../recipes.json";
import '../App.css';

export default function List ({recipes, onDelete}) {

    return (
        <div className="list">
            {recipes.map(recipe => (
            <ListItem key={recipe.id} recipe={recipe} onDelete={onDelete}/>
            ))}
        </div>
    );
}

