import React from 'react';

export default function FullRecipe(props) {
	const recipeSteps = props.recipe.instructions
		? props.recipe.instructions.split('.')
		: [ 'No instructions available!' ];

	recipeSteps.pop();

	const ingredients = props.recipe.extendedIngredients.map((ingr) => {
		return <li>{ingr.name}</li>;
	});

	const steps = recipeSteps.map((step) => {
		return <li>{step}</li>;
	});

	return (
		<div className="modalContainer recipe-modal" id={props.recipe.id}>
			<img src={props.recipe.image} alt={props.recipe.title} />
			<div className="modalMain">
				<div>
					<h4>Ingredients</h4>
					<ul>{ingredients}</ul>
				</div>
				<div>
					<h3>Instructions</h3>
					<ul>{steps}</ul>
				</div>
			</div>
		</div>
	);
}
