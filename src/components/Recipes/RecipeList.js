import React, { useState, useEffect } from 'react';
import Show from './Show';
import ListGroup from 'react-bootstrap/ListGroup';

import './styles.css';

export default function RecipeList(props) {
	const [selected, setSelected] = useState("")

	useEffect(() => {
		makeRecipeList();
	}, [selected, props.recipes])

	// Retrieve list from database
	// First item in list will always be New/Form
	// Render PantryListItem in each iteration
	const makeRecipeList = () => {
		const recipes = props.recipes.map(recipe => {
			return (
				<Show selected={selected} setSelected={setSelected} recipe={recipe} />
			)
		})
		return recipes;
	}
	return (
		<ListGroup as="ul">
			{makeRecipeList()}
		</ListGroup>
	);
}
