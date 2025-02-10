import { useState } from 'react';
import React from 'react';
import './App.css';
import RecipesList from "./components/RecipesList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from './components/Sidebar';
import AddRecipeForm from './components/AddRecipeForm';
import UpdateRecipeForm from './components/UpdateRecipeForm';
import recipesData from "../recipesData.json";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
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

  // Función para seleccionar receta que queremos actualizar/editar
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe); // Establecemos la receta seleccionada
  };

  // Función para actualizar recetas
  const handleUpdateRecipe = (updatedRecipe) => {
    setRecipes(recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe));
    setSelectedRecipe(null);  // Después de actualizar, limpiamos la selección
  };

  return (

    <Router>
      <div className="app-container">
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/item/:id" element={<ItemDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <AddRecipeForm onAddRecipe={handleAddRecipe} />

        {selectedRecipe && (
          <UpdateRecipeForm
            currentRecipe={selectedRecipe}
            updateRecipe={handleUpdateRecipe}
          />
        )}

        <RecipesList recipes={recipes} onDelete={handleDeleteRecipe} />

        <Footer />
      </div>
    </Router>
  )
}