import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Show(props) {
	return (
		<div>
			<h4>Quantity: {+props.item.quantity}</h4>
			<h4>Unit: {props.item.unit}</h4>
			<Button 
				variant="outline-danger"
				type="submit" onClick={(event) => props.handleDeleteItem(event, props.item.id, props.item.name)}
			>
				Delete
			</Button>
	</div>
	)
}

