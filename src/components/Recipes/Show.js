import React from 'react';
import classNames from 'classnames';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Show(props) {
	const pantryClass = classNames({
		'pantry-list__item'           : props,
		'pantry-list__item--selected' : props.selected
	});

	return (
		<ListGroup.Item as="li">
			<h3>{props.recipe.title}</h3>
			<img src={props.recipe.image} alt={props.recipe.title}/>
			<button> View Full Recipe</button>
		</ListGroup.Item>
	);
}
