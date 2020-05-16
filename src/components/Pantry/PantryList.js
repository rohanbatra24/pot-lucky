import React, { Fragment } from 'react';
import Show from './Show';
import Add from './Add';
import classNames from 'classnames';

import './styles.css';

import { Accordion, Card, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';

export default function PantryList(props) {
	// Retrieve list from database
	// First item in list will always be New/Form
	// Render PantryListItem in each iteration

	const pantryClass = classNames({
		'pantry-list__item'           : props,
		'pantry-list__item--selected' : props.selected
	});

	const allPantryNames = new Set(props.pantry.map(item => item.name))

	console.log("allPantrynames ===> ", allPantryNames)
	const pantryList = props.pantry.map((item) => {
	const isSelected = () => !props.selectedPantryList.includes(item.name);
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
					{isSelected() && (
							<Button
								variant="outline-info"
								className={pantryClass}
								onClick={() => props.setSelectedPantryList([ ...props.selectedPantryList, item.name ])}
							>
								<span role="img" aria-label="Add">➕</span>
							</Button>
						)}
				</Card>
			)
	})	
		
	return (
		<Fragment>

			<Accordion>
				<Card>
					<Accordion.Toggle as={Button} eventKey="0">
						Add something to your pantry!
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<Add ingredients={props.ingredients} handleAddItem={props.handleAddItem} />
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			<Accordion defaultActiveKey="0">
				{pantryList}
			</Accordion>
			
			{/* <ListGroup as="ul">{pantryList}</ListGroup> */}
		</Fragment>
	);
}