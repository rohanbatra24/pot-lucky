import React, { Fragment, useState, useEffect } from 'react';

import '../hooks/useApplicationData';

import '../App.css';

import PantryList from './Pantry/PantryList';
import RecipeList from './Recipes/RecipeList';
import MixingBowl from './MixingBowl';
import Search from './Search';
import NavBar from './NavBar';
import Filter from './Filter';
import SelectedPantry from './Pantry/SelectedPantry';

function App() {
	// const [ users, setUsers ] = useState([]);
	const [ filters, setFilters ] = useState({
		vegan      : false,
		vegetarian : false,
		glutenfree : false,
		healthy    : false,
		time       : 0,
		rating     : 0,
		cuisine    : null,
		dish       : null
	});
	const [ pantry, setPantry ] = useState([]);
	const [ recipeList, setRecipeList ] = useState([]);
	const [ selectedPantryList, setSelectedPantryList ] = useState([]);

	useEffect(() => {
		getPantry();
	}, []);

	function getFilteredRecipes() {
		//loop filters keys, get true ones "active filters"
		const activeFilters = Object.keys(filters).filter((f) => filters[f]);

		// console.log(activeFilters);
		// console.log('recipe list===', recipeList);

		let filtered = [];

		if (activeFilters.length > 0) {
			recipeList.forEach((recipe) => {
				if (filters.vegan && recipe.vegan) {
					filtered.push(recipe);
				}

				if (filters.vegetarian && recipe.vegetarian) {
					filtered.push(recipe);
				}
			});
		}
		else {
			filtered = recipeList;
		}

		let unique = [ ...new Set(filtered) ];

		// const recipes = unique.map((recipe) => {
		// 	console.log('recipe unique in app=====', recipe);
		// 	return recipe />;
		// });
		// console.log('recipes in app=====', recipes);
		console.log('unique===', unique);
		return unique;
	}

	function getPantry() {
		fetch('http://localhost:8080/api/pantries/all')
			.then((response) => response.json())
			.then((data) => {
				console.log('getPantry response===> ', data);
				setPantry(data);
			})
			.catch((err) => console.error(err));
	}

	function addToPantry(event, newItem) {
		event.preventDefault();
		fetch('http://localhost:8080/api/pantries/add', {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(newItem)
		})
			.then((res) => res.json())
			.then((res) => {
				setPantry([ ...pantry, res ]);
			})
			.catch((err) => console.error(err));
	}

	function deleteFromPantry(event, itemId, name) {
		event.preventDefault();
		console.log('itemID===', itemId);
		fetch('http://localhost:8080/api/pantries/delete', {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify({ id: itemId })
		})
			.then((res) => {
				setSelectedPantryList(selectedPantryList.filter((item) => item !== name));

				getPantry();
			})
			.catch((err) => console.error(err));
	}

	return (
		<Fragment>
			<NavBar />
			<div className="main">
				<div className="pantry-container">
					<div className="mixingbowl">
						{/*selectedPantryList*/}
						<SelectedPantry selectedPantryList={selectedPantryList} setSelectedPantryList={setSelectedPantryList} />
						<MixingBowl />
					</div>
					<label htmlFor="">
						<h1>Pantry List</h1>
					</label>
					<PantryList
						handleAddItem={addToPantry}
						pantry={pantry}
						setSelectedPantryList={setSelectedPantryList}
						selectedPantryList={selectedPantryList}
						handleDeleteItem={deleteFromPantry}
					/>
				</div>

				{
					<div className="recipe-container">
						<Search selectedPantryList={selectedPantryList} setRecipeList={setRecipeList} />
						{/* {recipeList.length > 0 && // only show filters if there are recipes */}
						<Filter filters={filters} setFilters={setFilters} recipeList={recipeList} />
						{/* } */}
						<label htmlFor="">
							<h1>Recipes</h1>
						</label>
						<RecipeList recipes={getFilteredRecipes()} />
						{/* <div className="recipes">{getRecipes()}</div> */}
					</div>
				}
			</div>
		</Fragment>
	);
}

export default App;
