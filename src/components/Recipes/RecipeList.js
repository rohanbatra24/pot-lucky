import React, { useState, useEffect, Fragment } from 'react';
import Show from './Show';
import { Image, Jumbotron, CardColumns } from 'react-bootstrap';

import './styles.css';

export default function RecipeList(props) {
	const [ selected, setSelected ] = useState('');

	useEffect(
		() => {
			makeRecipeList();
		},
		[ selected, props.recipes ]
	);

	const recipeListClass = props.recipes.length ? "recipes-full" : "empty-recipe-list"
	// Retrieve list from database
	// First item in list will always be New/Form
	// Render PantryListItem in each iteration
	const makeRecipeList = () => {
		if (props.recipes.length === 0) {
			return (
				<Fragment>
					<h4> Search for something or select items from your pantry! </h4>
					<Image
						className="no-results-img"
						src="https://image.flaticon.com/icons/svg/1971/1971011.svg"
						alt="Recipe Book"
					/>
				</Fragment>
			);
		}
		else {
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
		}
	};

	return (
		<div className={recipeListClass}>
			{makeRecipeList()}
		</div>
		)
	// <ListGroup className="overflow-auto" as="ul">
	// </ListGroup>
}
