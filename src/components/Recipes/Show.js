import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FullRecipe from './FullRecipe';
import '../../App.css';

export default function Show(props) {
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const pantryClass = classNames({
		'pantry-list__item'           : props,
		'pantry-list__item--selected' : props.selected
	});

	return (
		<Fragment>
			<ListGroup.Item as="li">
				<h3>{props.recipe.title}</h3>
				<button
					onClick={() => {
						props.setSelected(props.recipe.id);
						handleShow();
					}}
				>
					View Full Recipe
				</button>
			</ListGroup.Item>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Full Recipe</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FullRecipe recipe={props.recipe} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Make this and update my pantry!
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
}
