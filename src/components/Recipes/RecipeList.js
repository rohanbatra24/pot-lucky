import React, { useState, useEffect } from 'react';
import Show from './Show';
import ListGroup from 'react-bootstrap/ListGroup';

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
			return <div> Empty List - Search for something or add to your mixing bowl! </div>;
		}
		else {
			const recipes = props.recipes.map((recipe) => {
				return (
					<Show
						allergies={props.allergies}
						key={recipe.id}
						selected={selected}
						setSelected={setSelected}
						recipe={recipe}
						pantry={props.pantry}
					/>
				);
			});
			return recipes;
		}
	};

	return (
		<ListGroup className="overflow-auto" as="ul">
			{makeRecipeList()}
		</ListGroup>
	);
}
