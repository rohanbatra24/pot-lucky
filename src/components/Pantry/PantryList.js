import React, { Fragment } from 'react';
import Show from './Show';
import Add from './Add';
import classNames from 'classnames';

import './styles.css';

import { Accordion, Card, Button, ButtonGroup, ButtonToolbar, Image } from 'react-bootstrap';

export default function PantryList(props) {
	// Retrieve list from database
	// First item in list will always be New/Form
	// Render PantryListItem in each iteration

	const pantryClass = classNames({
		'pantry-list__item'           : props,
		'pantry-list__item--selected' : props.selected
	});

	const allPantryNames = new Set(props.pantry.map((item) => item.name));

	console.log('allPantrynames ===> ', allPantryNames);
	const pantryList = props.pantry.map((item) => {
		const isSelected = () => !props.selectedPantryList.includes(item.name);
		return (
			<Card>
				<Card.Header>
					{item.name}
					{isSelected() && (
						<Button
							variant="outline-success"
							className={pantryClass}
							onClick={() => props.setSelectedPantryList([ ...props.selectedPantryList, item.name ])}
						>
							+
						</Button>
					)}
					<Accordion.Toggle as={Button} variant="outline-info" eventKey={item.id}>
						...
					</Accordion.Toggle>
				</Card.Header>

				<Accordion.Collapse eventKey={item.id}>
					<Card.Body>
						<Show
							setSelectedPantryList={props.setSelectedPantryList}
							selectedPantryList={props.selectedPantryList}
							item={item}
							handleDeleteItem={props.handleDeleteItem}
							handleEditItem={props.handleEditItem}
						/>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		);
	});
	if (props.pantry.length) {
		return (
			<Fragment>
				<ButtonToolbar>
					<ButtonGroup className="mr-2" aria-label="Add All Button">
						<Button variant="success" onClick={() => props.setSelectedPantryList([ ...allPantryNames ])}>
							Add All
						</Button>
					</ButtonGroup>
				</ButtonToolbar>
				<Accordion>
					<Card>
						<Accordion.Toggle as={Button} eventKey="0">
							New Item
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<Add ingredients={props.ingredients} handleAddItem={props.handleAddItem} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				<div className="pantry-list">
					<Accordion defaultActiveKey="0">{pantryList}</Accordion>
				</div>
				{/* <ListGroup as="ul">{pantryList}</ListGroup> */}
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<Accordion>
					<Card>
						<Accordion.Toggle as={Button} eventKey="0">
							New Item
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<Add ingredients={props.ingredients} handleAddItem={props.handleAddItem} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				<Image className="pantry-list__empty"src="https://image.flaticon.com/icons/svg/2371/2371854.svg" alt="Groceries"/>
			</Fragment>
		)
	}
}
