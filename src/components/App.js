import React, { Fragment } from 'react';

import '../App.css';

import PantryList from './Pantry/Index';
import RecipeList from './Recipes/Index';
import MixingBowl from './MixingBowl'
import Search from './Search'
import NavBar from './NavBar'

const state = {
	pantryListItems : [
		{
			id       : 1,
			user_id  : 1,
			name     : 'banana',
			quantity : 3.432,
			unit     : 'pieces',
			expiry   : '2020-05-08'
		},
		{
			id       : 2,
			user_id  : 1,
			name     : 'sugar',
			quantity : 23.0,
			unit     : 'ounces',
			expiry   : '2020-05-08'
		},
		{
			id       : 3,
			user_id  : 1,
			name     : 'turnip',
			quantity : 12.0,
			unit     : 'pieces',
			expiry   : '2020-05-08'
		},
		{
			id       : 4,
			user_id  : 2,
			name     : 'lemon juice',
			quantity : 0.75,
			unit     : 'cups',
			expiry   : '2020-05-09'
		},
		{
			id       : 5,
			user_id  : 2,
			name     : 'cinnamon',
			quantity : 1.95,
			unit     : 'tablespoons',
			expiry   : '2020-05-09'
		},
		{
			id       : 6,
			user_id  : 3,
			name     : 'salt',
			quantity : 1.0,
			unit     : 'pinch',
			expiry   : '2020-05-09'
		}
	],
	recipeListItems : [
		{
			id             : 633508,
			image          : 'Baked-Cheese-Manicotti-633508.jpg',
			imageUrls      : [ 'Baked-Cheese-Manicotti-633508.jpg' ],
			readyInMinutes : 45,
			servings       : 6,
			title          : 'Baked Cheese Manicotti'
		},
		{
			id             : 634873,
			image          : 'Best-Baked-Macaroni-and-Cheese-634873.jpg',
			imageUrls      : [ 'Best-Baked-Macaroni-and-Cheese-634873.jpg' ],
			readyInMinutes : 45,
			servings       : 12,
			title          : 'Best Baked Macaroni and Cheese'
		}
	]
};

/*

	Child components:
		1. Pantry list
		2. Recipe list
		3. Search
		4. Navigation bar
		5. Mixing Bowl

*/

function App() {
	const pantry = state.pantryListItems.map((item) => {
		return <PantryList name={item.name} />;
	});

	const recipes = state.recipeListItems.map((item) => {
		return <RecipeList name={item.title} />;
	});

	return (
		<Fragment>
			<NavBar />
			<Search />
			<MixingBowl />
			<label htmlFor="">Pantry List</label>
			<div className="pantry">{pantry}</div>
			<label htmlFor="">Recipes</label>
			<div className="recipes">{recipes}</div>
		</Fragment>
	);
}

export default App;
