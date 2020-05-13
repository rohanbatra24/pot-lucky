import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import ListGroup from 'react-bootstrap/ListGroup';
import FullRecipe from './FullRecipe';


export default function Show(props) {
	const pantryClass = classNames({
		'pantry-list__item'           : props,
		'pantry-list__item--selected' : props.selected
	});


	if (props.selected === props.recipe.id) {
		return (
			<FullRecipe selected={props.selected} recipe={props.recipe}/> 
		)
	} else {
		return (
			<Fragment>
			<ListGroup.Item as="li">
				<h3>{props.recipe.title}</h3>
				<button onClick={() => props.setSelected(props.recipe.id)}> View Full Recipe</button>
			</ListGroup.Item>
			</Fragment>
		);
	}
}
