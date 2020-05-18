import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';

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
			<div className="modalMain">
				<div className="ingr-and-image">
				<Image roundedCircle src={props.recipe.image} alt={props.recipe.title} />
				<div>
					<h4>Ingredients</h4>
					<Jumbotron><ul>{ingredients}</ul></Jumbotron>
				</div>
				</div>
				<div>
					<h3>Instructions</h3>
					<Jumbotron><ol>{steps}</ol></Jumbotron>
				</div>
			</div>
		</div>
	);
}
