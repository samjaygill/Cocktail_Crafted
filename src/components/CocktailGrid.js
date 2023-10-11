import React from "react";
import { Link } from "react-router-dom";
import "./css/CocktailGrid.css";
import Header from "./Header";
import SearchBar from "./SearchBar";

const CocktailGrid = ({ cocktails, handleSearch, showSearchBar = true }) => {
  const sortedCocktails = cocktails.sort((a, b) =>
    a.strDrink.localeCompare(b.strDrink)
  );

  return (
    <>
      <div className="search-bar">
        {showSearchBar && <SearchBar handleSearch={handleSearch} />}
      </div>
      <div className="cocktail-container">
        {sortedCocktails &&
          sortedCocktails.map((cocktail, index) => (
            <Link
              to={`/${cocktail.idDrink}`}
              className="cocktail-card-small"
              key={index}
            >
              <img
                src={cocktail.strDrinkThumb}
                alt="cocktail"
                className="cocktail-image"
              />
              <div className="cocktail-details">
                <p className="cocktail-name">{cocktail.strDrink}</p>
                <p className="cocktail-category">{cocktail.strCategory}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default CocktailGrid;
