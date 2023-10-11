import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/CocktailDetails.css";
import Header from "./Header";

const CocktailDetails = ({ cocktails }) => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const cocktail = cocktails.find((cocktail) => cocktail.idDrink === id);

    if (!Array.isArray(cocktails)) {
      return (
        <div>
          <h2>Cocktail Details for ID: {id}</h2>
          <p>No cocktails available or data not loaded.</p>
        </div>
      );
    }

    if (cocktail) {
      setCocktail(cocktail);
    } else {
      setCocktail(null);
    }
  }, [id]);

  if (!cocktail) {
    return (
      <div>
        <h2>Cocktail Details Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="details-container">
        <div className="details-card">
          <p className="cocktail-name-big">{cocktail.strDrink.toUpperCase()}</p>
          <img
            src={cocktail.strDrinkThumb}
            alt="cocktail"
            className="cocktail-image-big"
          />
          <div className="cocktail-details-big">
            <p className="cocktail-category-big">{cocktail.strCategory}</p>
            <p className="cocktail-alcoholic-big">{cocktail.strAlcoholic}</p>
            <p className="cocktail-glass-big">{cocktail.strGlass}</p>
            <div className="cocktail-ingredients-big">
              Ingredients:
              <li className="i1">
                {cocktail.strMeasure1} {cocktail.strIngredient1}
              </li>
              <li className="i2">
                {cocktail.strMeasure2} {cocktail.strIngredient2}
              </li>
              <li className="i3">
                {cocktail.strMeasure3} {cocktail.strIngredient3}
              </li>
              <li className="i4">
                {cocktail.strMeasure4} {cocktail.strIngredient4}
              </li>
              <li className="i5">
                {cocktail.strMeasure5} {cocktail.strIngredient5}
              </li>
              <li className="i6">
                {cocktail.strMeasure6} {cocktail.strIngredient6}
              </li>
              <li className="i7">
                {cocktail.strMeasure7} {cocktail.strIngredient7}
              </li>
            </div>

            <p className="cocktail-instructions-big">
              {cocktail.strInstructions}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CocktailDetails;
