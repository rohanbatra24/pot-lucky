import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import FullRecipe from './FullRecipe';
import '../../App.css';
import { Image, Modal, Button, Card } from 'react-bootstrap';
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

	function updatePantryIngr(e) {
		for (let ingr of props.recipe.extendedIngredients) {
			for (let pantryIngr of props.pantry) {
				if (ingr.name === pantryIngr.name) {
					let diff = pantryIngr.quantity - ingr.amount;
					console.log(diff);
					diff < 0 ? (diff = 0) : (diff = diff);
					props.editInPantry(e, {
						unit     : pantryIngr.unit,
						quantity : diff,
						expiry   : pantryIngr.expiry,
						itemId   : pantryIngr.id
					});
				}
			}
		}
	}

	return (
		<Fragment>
			<Card className={`recipe-card card mb-1 ${canCookClass} ${allergyClass}`}>
				<div className="badges-container">
					{isAllergic() && (
						<Image
							src="https://image.flaticon.com/icons/svg/1500/1500374.svg"
							roundedCircle
							className="allergyBadge"
							alt="Allergy Badge"
						/>
					)}
					{!canCook() && (
						<Image
							src="https://image.flaticon.com/icons/svg/859/859270.svg"
							alt="Missing Ingredients Badge"
							roundedCircle
							className="cannotCookBadge"
						/>
					)}
				</div>
				<Card.Img variant="top" src={props.recipe.image} alt={props.recipe.title} />
				<Card.Body>
					<Card.Title>{props.recipe.title.slice(0, 15)}...</Card.Title>
					<Card.Text>
						<small>Ready in: {props.recipe.readyInMinutes} minutes</small>
						<br />
						<small>Spoonacular Score: {props.recipe.spoonacularScore}%</small>
						<br />
						<small>Health Score: {props.recipe.healthScore}</small>
						<br />
						<small>Likes: {props.recipe.aggregateLikes}</small>
						<br />
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button
						variant="primary"
						size="lg"
						block
						onClick={() => {
							props.setSelected(props.recipe.id);
							handleShow();
						}}
					>
						Details
					</Button>
				</Card.Footer>
			</Card>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Full Recipe</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FullRecipe editInPantry={props.editInPantry} recipe={props.recipe} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={(e) => updatePantryIngr(e)}>
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
