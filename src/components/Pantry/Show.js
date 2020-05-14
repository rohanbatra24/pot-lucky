import React from 'react';
import classNames from 'classnames';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Show(props) {
	const pantryClass = classNames({
		'pantry-list__item'           : props,
		'pantry-list__item--selected' : props.selected
	});

	// console.log('props:', props);

	const isSelected = () => !props.selectedPantryList.includes(props.item.name);

	return (
		<div>
			<h4>Quantity: {+props.item.quantity}</h4>
			<h4>Unit: {props.item.unit}</h4>
			{isSelected() && (
				<button
					className={pantryClass}
					onClick={() => props.setSelectedPantryList([ ...props.selectedPantryList, props.item.name ])}
				>
					Add to Sel Pantry List
				</button>
			)}
			<button type="submit" onClick={(event) => props.handleDeleteItem(event, props.item.id, props.item.name)}>
				Delete
			</button>
	</div>
	)
}

