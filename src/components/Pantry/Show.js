import React from 'react';
import classNames from 'classnames';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Show(props) {
	const pantryClass = classNames({
		'pantry-list__item'           : props,
		'pantry-list__item--selected' : props.selected
	});

	// console.log('props:', props);

	const isSelected = () => !props.selectedPantryList.includes(props.name);
	
	return (
		<ListGroup.Item as="li" id={props.id}>
			<h3>{props.name}</h3>
				{isSelected() && 
					<button className={pantryClass} onClick={() => props.setSelectedPantryList([ ...props.selectedPantryList, props.name ])}>
						Add to Sel Pantry List
					</button>}
			<button type="submit" onClick={(event) => props.handleDeleteItem(event, props.id, props.name)}>
				Delete
			</button>
		</ListGroup.Item>
	);
}
