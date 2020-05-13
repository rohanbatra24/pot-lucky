import React from 'react';
import Show from './Show';
import ListGroup from 'react-bootstrap/ListGroup';

import './styles.css';

export default function RecipeList(props) {
	// Retrieve list from database
	// First item in list will always be New/Form
	// Render PantryListItem in each iteration

	return (
		<ListGroup as="ul">
			<Show name={props.name} />
		</ListGroup>
	);
}
