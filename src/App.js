import "./App.css";
import React, { useState, useEffect } from 'react';

import CocktailDetails from "./components/CocktailDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CocktailGrid from "./components/CocktailGrid";
import Header from "./components/Header";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const getCocktails = async () => {
    const url = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7ed00fb074msh71dab9fb1f1727ap1209c3jsn5b590b2843f5',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const cocktailData = await response.json();
      setCocktails(cocktailData.drinks || []); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCocktails();
  }, []);

  const handleSearch = (input) => {
    const results = cocktails.filter((cocktail) => {
      const lowerInput = input.toLowerCase();

      return(
        cocktail.strDrink.toLowerCase().includes(lowerInput) ||
        cocktail.strCategory.toLowerCase().includes(lowerInput) ||
        cocktail.strGlass.toLowerCase().includes(lowerInput)
      )
    });
    setFilteredResults(results);

  }

  return (
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<CocktailGrid cocktails={filteredResults.length ? filteredResults : cocktails} handleSearch={handleSearch}/>} />
        <Route path="/:id" element={<CocktailDetails  cocktails={cocktails}/>} />
        </Routes>
      </Router>
  );
}

export default App;
