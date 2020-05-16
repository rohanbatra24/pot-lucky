import React, { useState, useEffect, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

import '../../App.css';

export default function Add(props) {
	const [ values, setValues ] = useState({
		name     : '',
		quantity : '',
		unit     : '',
		expiry   : ''
	});

	const ingredientList = props.ingredients.map((ingred) => {
		return <option key={ingred.spoonacular_id}>{ingred.name}</option>;
	});

	const units = [
		'g',
		'kg',
		'lbs',
		'pounds',
		'ozs',
		'cups',
		'ml',
		'l',
		'liters',
		'tsp',
		'tbsps',
		'qt',
		'bunch',
		'scoops',
		'leaves',
		'drops',
		'sheets',
		'slices',
		'inches',
		'stalks',
		'sticks',
		'strips',
		'sprigs',
		'dashes',
		'pinches'
	];

	const unitList = units.map((unit) => {
		return <option key={unit}>{unit}</option>;
	});

	return (
		<Fragment>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Control
						className="form-component"
						value={values.name}
						name="name"
						placeholder="Ingredient"
						type="text"
						list="ingredients"
						onChange={(e) => setValues({ ...values, name: e.target.value })}
					/>
					<datalist id="ingredients">
						<select>{ingredientList}</select>
					</datalist>
					<Form.Control
						as="select"
						className="form-component"
						value={values.unit}
						name="unit"
						placeholder="Unit"
						onChange={(e) => setValues({ ...values, unit: e.target.value })}
					>
						<option value="" defaultValue disabled hidden>
							Pick a unit
						</option>
						{unitList}
					</Form.Control>
					<Form.Control
						className="form-component"
						value={values.quantity}
						name="quantity"
						placeholder="Quantity"
						type="number"
						onChange={(e) => setValues({ ...values, quantity: e.target.value })}
					/>
					<Form.Control
						className="form-component"
						value={values.expiry}
						name="expiry"
						placeholder="Expiration Date (Optional)"
						type="date"
						onChange={(e) => setValues({ ...values, expiry: e.target.value })}
					/>
					<Button
						className="centered-button"
						variant="outline-danger"
						type="submit"
						onClick={(event) => {
							props.handleAddItem(event, values);
							setValues({
								name     : '',
								quantity : '',
								unit     : '',
								expiry   : ''
							})
						}}
						block
					>
						Add item to your pantry
					</Button>
				</Form.Group>
			</Form>
		</Fragment>
	);
}
