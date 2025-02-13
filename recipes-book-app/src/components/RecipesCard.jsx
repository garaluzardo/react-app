import React from 'react';
import '../App.css';
import RecipesList from './RecipesList';
import { Link } from 'react-router-dom';

const calorieColorMap = {
    low: '#90EE90',
    medium: '#FFD700',
    high: '#FF6347',
  };

  const getBorderColor = (calories) => {
    if (calories < 300) {
      return calorieColorMap.low;
    } else if (calories >= 300 && calories < 600) {
      return calorieColorMap.medium;
    } else {
      return calorieColorMap.high;
    }
  };

export default function RecipesCard({ recipe, onDelete }) {

    const borderColor = getBorderColor(recipe.calories);

    return (
    <div
      className="recipes-card"
      style={{
        boxShadow: `0px 4px 10px ${borderColor}`,
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        backgroundColor: '#fff',
      }}
    >
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} />
      <button onClick={() => onDelete(recipe.id)}>Delete</button>
      <Link to={`/recipe-detail/${recipe.id}`}>
        <button>Details / Edit</button>
      </Link>
    </div>
  );
}