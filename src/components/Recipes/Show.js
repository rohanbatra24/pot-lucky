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
			{/* <ListGroup.Item as="li">
				<h3>{props.recipe.title}</h3>
				<button
					onClick={() => {
						props.setSelected(props.recipe.id);
						handleShow();
					}}
				>
					View Full Recipe
				</button>
			</ListGroup.Item> */}

			<div className="recipe-card card mb-3">
				<div className="row no-gutters">
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{props.recipe.title}</h5>
							<p className="card-text">Ready in: {props.recipe.readyInMinutes} mins</p>
							<p className="card-text">Health Score: {props.recipe.healthScore}</p>
							<p className="card-text">Likes: {props.recipe.aggregateLikes}</p>
							<p className="card-text">
								<small className="text-muted">Spoonacular Score: {props.recipe.spoonacularScore}</small>
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<img src={props.recipe.image} className="card-img" alt={props.recipe.title} />
						<button
							className="btn btn-primary"
							onClick={() => {
								props.setSelected(props.recipe.id);
								handleShow();
							}}
						>
							View Full Recipe
						</button>
					</div>
				</div>
			</div>

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
