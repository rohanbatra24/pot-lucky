import React from 'react';
import classNames from 'classnames';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Show(props) {
	const pantryClass = classNames({
		'pantry-list__item'           : props,
		'pantry-list__item--selected' : props.selected
	});

	console.log('props:', props);

	return (
		<ListGroup.Item as="li">
    	<h3>{props.name}</h3>
  	</ListGroup.Item>
	);
}
