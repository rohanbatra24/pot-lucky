import React, { useState, useEffect, Fragment } from "react";
import Show from "./Show";
import { Image } from "react-bootstrap";

import "./styles.css";

export default function RecipeList(props) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    makeRecipeList();
  }, [selected, props.recipes]);

  const recipeListClass = props.recipes.length
    ? "recipes-full"
		: "empty-recipe-list";

  // Retrieve list from database
  // First item in list will always be New/Form
  // Render PantryListItem in each iteration
  const makeRecipeList = () => {
    if (props.recipeState === "empty") {
      return (  
				<div className="recipe-empty">
          <h4> Search for something or select items from your pantry! </h4>
          <Image
            src="https://image.flaticon.com/icons/svg/1971/1971011.svg"
            alt="Recipe Book"
          />
        </div>
			);
			// second condition is for when you filter the list down to no recipes left
			// recipeState is still full but no recipes in the container
    } else if (props.recipeState === "noResults" || (props.recipeState === "full" && !props.recipes.length)) {
      return (
        <div className="recipe-no-results">
          <h4>No Results</h4>
          <Image
            src="https://image.flaticon.com/icons/svg/2187/2187405.svg"
            alt="Empty Tray"
          />
        </div>
      );
    } else if (props.recipeState === "full") {
      const recipes = props.recipes.map((recipe) => {
        return (
          <Show
            editInPantry={props.editInPantry}
            allergies={props.allergies}
            key={recipe.id}
            selected={selected}
            setSelected={setSelected}
            recipe={recipe}
            pantry={props.pantry}
            addSavedRecipe={props.addSavedRecipe}
          />
        );
      });
      return recipes;
    } else if (props.recipeState === "error") {
      return (
        <div className="recipe-error">
          <h4>Hmm...</h4>
					<h6>Looks like something went wrong with our search engine.</h6>
					<p>Try another search!</p>
          <Image
            src="https://cdn.dribbble.com/users/3817517/screenshots/6757521/burnt_toast.jpg"
            alt="Burnt Toast"
          />
        </div>
      );
    } else if (props.recipeState === "loading") {
      return (
        <div className="recipe-loading">
				<Image
          src="https://cdn.dribbble.com/users/1522528/screenshots/6123013/adac_socialmedia_march2018-v3.gif"
          alt="Loading Recipes"
        />
				</div>
			);
    } 
  };

  return <div className={recipeListClass}>{makeRecipeList()}</div>;
}
