import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import FullRecipe from './FullRecipe';
import '../../App.css';
import { Image, Modal, Button } from 'react-bootstrap';
import allergyBadge from '../../assets/allergyBadge.svg';
export default function Show(props) {
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [ mode, setMode ] = useState('before');

	const pantryClass = classNames({
		'pantry-list__item'           : props,
		'pantry-list__item--selected' : props.selected
	});

	function isAllergic() {
		let result = false;
		for (let ingredient of props.recipe.extendedIngredients) {
			for (let allergy of props.allergies) {
				if (ingredient.name === allergy) {
					result = true;
				}
			}
		}
		return result;
	}
	const allergyClass = isAllergic ? 'allergic' : '';

	const pantryArr = props.pantry.map((item) => item.name);

	function canCook() {
		let result = true;
		for (let ingredient of props.recipe.extendedIngredients) {
			if (!pantryArr.includes(ingredient.name)) {
				result = false;
			}
		}
		return result;
	}
	const canCookClass = canCook() ? 'canCook' : 'cannotCook';

	return (
		<Fragment>
			<div className={`recipe-card card mb-3 ${canCookClass} ${allergyClass}`}>
				{isAllergic() && (
					<Image src={allergyBadge} roundedCircle className="allergyBadge" alt="allergy badge" />
				)}
				<div className="row no-gutters">
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{props.recipe.title}</h5>
							<p className="card-text">Ready in: {props.recipe.readyInMinutes} mins</p>
							<p className="card-text">Health Score: {props.recipe.healthScore}</p>
							<p className="card-text">Likes: {props.recipe.aggregateLikes}</p>
							<p className="card-text">Spoonacular Score: {props.recipe.spoonacularScore}</p>
						</div>
					</div>
					<div className="col-md-4">
						<img src={props.recipe.image} className="card-img" alt={props.recipe.title} thumbnail/>
						<button
							className="btn btn-primary"
							onClick={() => {
								props.setSelected(props.recipe.id);
								handleShow();
							}}
						>
							Details
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

					{mode === 'before' ? (
						<Button
							variant="primary"
							onClick={(e) => {
								setMode('after');

								props.addSavedRecipe(e, {
									url   : props.recipe.sourceUrl,
									image : props.recipe.image,
									title : props.recipe.title
								});
							}}
						>
							Add to my saved recipes
						</Button>
					) : (
						<Button
							disabled
							variant="success"
							onClick={(e) =>
								props.addSavedRecipe(e, {
									url   : props.recipe.sourceUrl,
									image : props.recipe.image,
									title : props.recipe.title
								})}
						>
							Saved
						</Button>
					)}
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
}
