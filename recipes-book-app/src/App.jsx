import { useState } from 'react';
import React from 'react';
import './App.css';
import List from "./components/List";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";


export default function App() {

  /* const [count, setCount] = useState(0) */

  return (
    <>
      <Navbar />
      <Sidebar />

      <List />
      
      <Footer />

    </>
  )
}