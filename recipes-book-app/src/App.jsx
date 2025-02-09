import { useState } from 'react';
import React from 'react';
import './App.css';
import List from "./components/List";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from './components/Sidebar';
import AddRecipeForm from './components/AddRecipeForm';
import UpdateRecipeForm from './components/UpdateRecipeForm';
import recipesData from "../recipesData.json";

export default function App() {
  const [recipes, setRecipes] = useState(recipesData);

/*   const [selectedRecipe, setSelectedRecipe] = useState(null); */

  //Función para agregar recetas
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

//
const handleDeleteRecipe = (id) => {
  setRecipes(recipes.filter(recipe => recipe.id !== id));
};

  // Función para actualizar recetas
  const handleUpdateRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );

    setRecipes(updatedRecipes);
    setSelectedRecipe(null);
  };

  // Función para seleccionar receta que queremos actualizar/editar
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe); // Establecemos la receta seleccionada
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <AddRecipeForm onAddRecipe={handleAddRecipe} />
      
      {/* <UpdateRecipeForm recipe={selectedRecipe} />
 */}
      {/* <Router> */}
      {/* <Route path="" element={<HomePage />} />
        <Route path="" element={<AboutPage />} />
        <Route path="" element={<DashboardPage />} />
        <Route path="" element={<ItemDetailsPage />} />
        <Route path="" element={<NotFoundPage />} /> */}

      <List recipes={recipes} onDelete={handleDeleteRecipe} />
      {/*  </Router> */}

      <Footer />

    </>
  )
}