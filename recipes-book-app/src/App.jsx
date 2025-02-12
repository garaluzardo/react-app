import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from './components/Sidebar';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddRecipeForm from './components/RecipeForm';
import recipesData from "../recipesData.json";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import RecipesList from "./components/RecipesList";

export default function App() {

  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [recipes, setRecipes] = useState(() => {
    
    // Intentar cargar las recetas desde el localStorage
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : recipesData;
  });

  //Función para agregar recetas
  const handleAddRecipe = (newRecipe) => {
    newRecipe.id = uuidv4().toString(); // Asignar un ID único
    const newRecipes = [...recipes, newRecipe];
    setRecipes(newRecipes);
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
  };

  // Función para borrar receta
  const handleDeleteRecipe = (id) => {
    const deletedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(deletedRecipes);
    localStorage.setItem('recipes', JSON.stringify(deletedRecipes));
  };

//Función para actualizar recetas
const handleUpdateRecipe = (updatedRecipe) => {
  const updatedRecipes = recipes.map(recipe => 
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  );
  setRecipes(updatedRecipes);
  localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
}

/* // Función para seleccionar una receta para actualizar
const handleSelectRecipe = (id) => {
  const recipe = recipes.find(recipe => recipe.id === id);
  setSelectedRecipe(recipe);
}; */

  return (
    <Router>
      <>
        <Navbar />
        <Sidebar />
        <Footer />
        <div className="app-container">
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
        </div>
       
    
      </>
    </Router>
  )
}