import React from 'react';
import Form from 'react-bootstrap/Form';
import Switch from './Switch';
import Slider from './Slider';

// cuisine - dropdown
// time required - slider
// dietary restrictions - switches
//  - vegan
//  - vegatarian
//  - gluten-free
//  - low calories (?)
// spoonacular score - slider
// dish type - dropdown

export default function Filter(props) {
	//get a list of dish types from recipe list
	//to form dish type dropdown
	const dishList = [
		'main course',
		'side dish',
		'dessert',
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
		return <option>{dish}</option>;
	});

	const cuisinesList = cuisineList.map((cuisine) => {
		return <option>{cuisine}</option>;
	});

	// props.recipeList.forEach((recipe) => {
	// 	recipe.dishTypes.forEach((dish) => {
	// 		dishList.add(dish);
	// 	});
	// });

	// const dishesList = [ ...dishList ].map((type) => {
	// 	return <option value={type}>{type}</option>;
	// });

	//for time range slider
	// go through recipeList and get readyInMinutes
	//choose the maximum and the minimum
	const times = [];
	props.recipeList.forEach((recipe) => {
		times.push(recipe.readyInMinutes);
	});
	const max_time = Math.max(...times);
	const min_time = Math.min(...times);
	// console.log('max: ', max_time, 'min: ', min_time);

	//////////
	return (
		<div className="filters">
			<Form>
        <Switch
          type="vegan"
					isOn={props.filters.vegan}
					handleToggle={() => props.setFilters({ ...props.filters, vegan: !props.filters.vegan })}
				/>
				Vegan
				<Switch
          type="vegetarian"
					isOn={props.filters.vegetarian}
					handleToggle={() => props.setFilters({ ...props.filters, vegetarian: !props.filters.vegetarian })}
				/>
				Vegetarian
				<Switch
          type="glutenfree"
					isOn={props.filters.glutenfree}
					handleToggle={() => props.setFilters({ ...props.filters, glutenfree: !props.filters.glutenfree })}
				/>
				Gluten Free
				<Switch
          type="healthy"
					isOn={props.filters.healthy}
					handleToggle={() => props.setFilters({ ...props.filters, healthy: !props.filters.healthy })}
				/>
				Healthy
				<Slider
          type="rating"
					maxSize={100}
					minSize={0}
					initialSize={props.filters.rating}
					handleChange={(event) => props.setFilters({ ...props.filters, rating: event.target.value })}
				/>
				Rating
				<Slider
          type="time"
					maxSize={max_time}
					minSize={min_time}
					initialSize={props.filters.time}
					handleChange={(event) => props.setFilters({ ...props.filters, time: event.target.value })}
				/>
				Time
				<Form.Group controlId="exampleForm.SelectCustom">
					<Form.Label>Dish Type</Form.Label>
					<Form.Control
						as="select"
						custom
						onChange={(event) => props.setFilters({ ...props.filters, dish: event.target.value })}
					>
						<option value="" selected disabled hidden>
							Pick a dish type
						</option>
						<option>All</option>
						{dishesList}
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="exampleForm.SelectCustom">
					<Form.Label>Cuisine</Form.Label>
					<Form.Control
						as="select"
						custom
						onChange={(event) => props.setFilters({ ...props.filters, cuisine: event.target.value })}
					>
						<option value="" selected disabled hidden>
							Pick a cuisine type
						</option>
						<option>All</option>
						{cuisinesList}
					</Form.Control>
				</Form.Group>
			</Form>
		</div>
	);
}
