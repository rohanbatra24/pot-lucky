import React, { Fragment } from 'react';
import Show from './Show';
import Add from './Add';
import classNames from 'classnames';

import './styles.css';
import '../../App.css';

import { Accordion, Card, Button, Image } from 'react-bootstrap';

export default function PantryList(props) {
	// Retrieve list from database
	// First item in list will always be New/Form
	// Render PantryListItem in each iteration

	const pantryClass = classNames({
		'pantry-list__item plus-button'           : props,
		'pantry-list__item--selected plus-button' : props.selected
	});

	const allPantryNames = new Set(props.pantry.map((item) => item.name));

	const pantryList = props.pantry.map((item) => {
		const isSelected = () => !props.selectedPantryList.includes(item.name);
		return (
			<Card>
				<Card.Header>
					<span class="adjusted-pantry-item">{item.name}</span>
					{isSelected() && (
						<Button
							variant="warning"
							className={pantryClass}
							onClick={() => props.setSelectedPantryList([ ...props.selectedPantryList, item.name ])}
						>
							<img 
								alt="Add"
								src="https://image.flaticon.com/icons/svg/1828/1828925.svg"
							/>
						</Button>
					)}
					<Accordion.Toggle as={Button} variant="light" eventKey={item.id}>
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
				<h3>What's in my pantry?</h3>
				<Accordion className="pantry-list">
					<Card>
						<Accordion.Toggle className="pantry-list__new"as={Card.Header} eventKey="0">
							New Item
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>								
								<Add ingredients={props.ingredients} handleAddItem={props.handleAddItem} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>				
					{/* <div className="pantry-list"> */}
							{pantryList}
					{/* </div> */}
				</Accordion>
				{(props.selectedPantryList.length !== props.pantry.length) && props.pantry.length > 0 && 
					(<Button block class="adjusted-button" variant="warning" onClick={() => props.setSelectedPantryList([ ...allPantryNames ])}>
						Select All
					</Button>)
				}
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<h3>What's in my pantry?</h3>
				<Accordion>
					<Card>
						<Card.Header>
						<Accordion.Toggle className="pantry-list__new" as={Button} eventKey="0">
							New Item
						</Accordion.Toggle>
						</Card.Header>
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
