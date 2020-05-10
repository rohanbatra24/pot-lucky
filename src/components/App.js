import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import '../hooks/useApplicationData';

import '../App.css';

import PantryList from './Pantry/Index';
import RecipeList from './Recipes/Index';
import MixingBowl from './MixingBowl';
import Search from './Search';
import NavBar from './NavBar';
import Filter from './Filter';

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
	],
	users           : [
		{
			id       : 1,
			name     : 'Harry Potter',
			email    : 'hp@hogwarts.com(opens in new tab)',
			password : 'password' //will store as hash
		}
	]
};

function App() {
	// const [ users, setUsers ] = useState([]);

	const [pantry, setPantry] = useState([]);
	const [recipeList, setRecipeList] = useState([]);

	useEffect(() => {
		getPantry();
		// getRecipeList();
	}, []);

	function getRecipeList() {
		axios.get('https://api.spoonacular.com/recipes/search?query=cheese&number=10&apiKey=4ed5da45f1c94518a9663b95f895c3b3')
		  .then(res => setRecipeList(res.data.results))
		  .catch(err => console.error(err));
	}

	function getPantry() {
		fetch('http://localhost:3001')
			.then((response) => {
				// console.log('response====', response);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setPantry(data);
			});
	}

	// console.log('====', pantry);

	const pantryList = pantry.map((item) => {
		return <h1>{item.name} </h1>;
	});

	const recipes = recipeList.map((item) => {
		return <RecipeList name={item.title} />;
	});

	return (
		<Fragment>
			<NavBar />
			<div className="main">
				<div className="pantry-container">
					<div className="mixingbowl">
						<MixingBowl />
					</div>
					<label htmlFor="">
						<h1>Pantry List</h1>
					</label>
					<div className="pantry">{pantryList && pantryList}</div>
				</div>

				{
					<div className="recipe-container">
						<Search setRecipeList={setRecipeList} />
						<Filter />
						<label htmlFor="">
							<h1>Recipes</h1>
						</label>
						<div className="recipes">{recipes}</div>
					</div>
				}
			</div>
		</Fragment>
	);
}

export default App;
