import React, { Fragment } from 'react';
import Show from './Show';
import Add from './Add';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles.css';


import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function PantryList(props) {
	// Retrieve list from database
	// First item in list will always be New/Form
	// Render PantryListItem in each iteration



	const pantryList = props.pantry.map((item) => {
		return (
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey={item.id}>
						{item.name}
					</Accordion.Toggle>
					<Accordion.Collapse eventKey={item.id}>
						<Card.Body>
							<Show 
								setSelectedPantryList={props.setSelectedPantryList}
								selectedPantryList={props.selectedPantryList}
								item={item}
								handleDeleteItem={props.handleDeleteItem}
							/>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			)
	})	
		
	return (
		<Fragment>
			<Add ingredients={props.ingredients} handleAddItem={props.handleAddItem} />
			<Accordion defaultActiveKey="0">
				{pantryList}
			</Accordion>
			
			{/* <ListGroup as="ul">{pantryList}</ListGroup> */}
		</Fragment>
	);
}