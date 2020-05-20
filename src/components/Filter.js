import React from 'react';
import Form from 'react-bootstrap/Form';
import Switch from './Switch';
import Slider from './Slider';

export default function Filter(props) {
	//get a list of dish types from recipe list
	//to form dish type dropdown
	const dishList = [
		'main course',
		'side dish',
		'desserts',
		'appetizer',
		'salad',
		'bread',
		'breakfast',
		'soup',
		'beverage',
		'sauce',
		'marinade',
		'fingerfood',
		'snack',
		'drink'
	];

	const cuisineList = [
		'African',
		'American',
		'British',
		'Cajun',
		'Caribbean',
		'Chinese',
		'Eastern European',
		'European',
		'French',
		'German',
		'Greek',
		'Indian',
		'Irish',
		'Italian',
		'Japanese',
		'Jewish',
		'Korean',
		'Latin American',
		'Mediterranean',
		'Mexican',
		'Middle Eastern',
		'Nordic',
		'Southern',
		'Spanish',
		'Thai',
		'Vietnamese'
	];

	const dishesList = dishList.map((dish) => {
		return <option key={dish}>{dish}</option>;
	});

	const cuisinesList = cuisineList.map((cuisine) => {
		return <option key={cuisine}>{cuisine}</option>;
	});

	// for time range slider
	// go through recipeList and get readyInMinutes
	// choose the maximum and the minimum
	const times = [];
	props.recipeList.forEach((recipe) => {
		times.push(recipe.readyInMinutes);
	});
	const max_time = Math.max(...times);
	const min_time = Math.min(...times);

	//////////
	return (
		<div className="filters">
			<Form className="filter-container">
				<div className="filters-row1">
					<Switch
						type="Vegan"
						isOn={props.filters.vegan}
						handleToggle={() => props.setFilters({ ...props.filters, vegan: !props.filters.vegan })}
					/>
					<Switch
						type="Vegetarian"
						isOn={props.filters.vegetarian}
						handleToggle={() =>
							props.setFilters({ ...props.filters, vegetarian: !props.filters.vegetarian })}
					/>
					<Switch
						type="Gluten Free"
						isOn={props.filters.glutenfree}
						handleToggle={() =>
							props.setFilters({ ...props.filters, glutenfree: !props.filters.glutenfree })}
					/>
					<Switch
						type="Healthy"
						isOn={props.filters.healthy}
						handleToggle={() => props.setFilters({ ...props.filters, healthy: !props.filters.healthy })}
					/>
				</div>

				<div className="filters-row2">
					<div className="sliders">
						<Slider
							type="Rating"
							maxSize={100}
							minSize={0}
							initialSize={props.filters.rating}
							handleChange={(event) => props.setFilters({ ...props.filters, rating: event.target.value })}
						/>

						<Slider
							disabled={min_time === max_time}
							type="Prep Time"
							maxSize={max_time}
							minSize={min_time}
							initialSize={props.filters.time}
							handleChange={(event) => props.setFilters({ ...props.filters, time: event.target.value })}
						/>
					</div>

					<Form.Group controlId="exampleForm.SelectCustom">
						<div className="dish-type">
							<span>Dish Type</span>

							<Form.Control
								as="select"
								custom
								onChange={(event) =>
									props.setFilters({
										...props.filters,
										dish : event.target.value == 'All' ? null : event.target.value
									})}
							>
								<option value="" defaultValue disabled hidden>
									Pick a dish type
								</option>
								<option value={null}>All</option>
								{dishesList}
							</Form.Control>
						</div>
					</Form.Group>
					<Form.Group controlId="exampleForm.SelectCustom">
						<div className="cuisine">
							<span>Cuisine</span>
							<Form.Control
								as="select"
								custom
								onChange={(event) =>
									props.setFilters({
										...props.filters,
										cuisine : event.target.value == 'All' ? null : event.target.value
									})}
							>
								<option value="" defaultValue disabled hidden>
									Pick a cuisine type
								</option>
								<option>All</option>
								{cuisinesList}
							</Form.Control>
						</div>
					</Form.Group>
				</div>
			</Form>
		</div>
	);
}
