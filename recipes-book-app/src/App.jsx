import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from './components/Sidebar';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddRecipeForm from './components/AddRecipeForm';
import recipesData from "../recipesData.json";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

import RecipesList from "./components/RecipesList";

export default function App() {

  const [recipes, setRecipes] = useState(() => {
    
    // Intentar cargar las recetas desde el localStorage
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : recipesData;
  });

  /* const [selectedRecipe, setSelectedRecipe] = useState(null); */

  //Función para agregar recetas
  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = ([...recipes, newRecipe]); // ¿¿Usamos el estado previo 'prevRecipes' para no mutar directamente el estado de recipes?? @ Carlos
    setRecipes(updatedRecipes);

    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

  };

  // Función para borrar receta/item
  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} onDelete={handleDeleteRecipe}/> } />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/recipe-detail/:id" element={<ItemDetailsPage recipes={recipes} />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route
            path="/add-recipe"
            element={<AddRecipeForm onAddRecipe={handleAddRecipe} />}
          />

        </Routes>
        
        {/* {selectedRecipe && (
          <UpdateRecipeForm
            currentRecipe={selectedRecipe}
            updateRecipe={handleUpdateRecipe}
          />
        )}

        <RecipesList recipes={recipes} onDelete={handleDeleteRecipe} /> */}

        <Footer />
      </div>
    </Router>
  )
}