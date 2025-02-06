import { useState } from 'react';
import React from 'react';
import './App.css';
import List from "./components/List";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Router>
        <Route path="" element={<HomePage />} />
        <Route path="" element={<AboutPage />} />
        <Route path="" element={<DashboardPage />} />
        <Route path="" element={<ItemDetailsPage />} />
        <Route path="" element={<NotFoundPage />} />

        <List />
      </Router>

      <Footer />

    </>
  )
}