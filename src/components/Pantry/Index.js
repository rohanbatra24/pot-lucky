import React from 'react';

import Show from './Show';

import './styles.css';

export default function PantryList(props) {
	// Retrieve list from database
	// First item in list will always be New/Form
	// Render PantryListItem in each iteration

	return (
		<ul className="show">
			<Show name={props.name} />
		</ul>
	);
}
