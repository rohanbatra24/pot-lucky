import React, { useState, useEffect } from 'react';
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

	// Retrieve list from database
	// First item in list will always be New/Form
	// Render PantryListItem in each iteration
	const makeRecipeList = () => {
		if (props.recipes.length === 0) {
			return (
				<Jumbotron className="recipes-empty">
					Search for something or add to your mixing bowl!
					<Image
						className="no-results-img"
						src="https://image.flaticon.com/icons/svg/1971/1971011.svg"
						alt="Recipe Book"
					/>
				</Jumbotron>
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
		<div className="recipes-full">
			{makeRecipeList()}
		</div>
		)
	// <ListGroup className="overflow-auto" as="ul">
	// </ListGroup>
}
