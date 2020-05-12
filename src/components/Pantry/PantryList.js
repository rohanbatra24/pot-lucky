import React, { Fragment } from 'react';
import Show from './Show';
import Add from './Add';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles.css';

export default function PantryList(props) {
	// Retrieve list from database
	// First item in list will always be New/Form
	// Render PantryListItem in each iteration

	const pantryList = props.pantry.map((item) => {
		return (
			<Fragment>
				<Show
					setSelectedPantryList={props.setSelectedPantryList}
					selectedPantryList={props.selectedPantryList}
					name={item.name}
					id={item.id}
					handleDeleteItem={props.handleDeleteItem}
				/>
				{/* fix needed = only allow user to add item once */}
			</Fragment>
		);
	});

	return (
		<Fragment>
			<Add handleAddItem={props.handleAddItem} />

			<ListGroup as="ul">{pantryList}</ListGroup>
		</Fragment>
	);
}
