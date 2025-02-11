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

import RecipesList from "./components/RecipesList";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const [recipes, setRecipes] = useState(recipesData);

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //Función para agregar recetas
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]); // ¿¿Usamos el estado previo 'prevRecipes' para no mutar directamente el estado de recipes?? @ Carlos
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
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/item/:id" element={<ItemDetailsPage />} /> */}
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