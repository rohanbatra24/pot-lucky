import React, { Fragment, useState, useEffect } from 'react';

import '../hooks/useApplicationData';

import '../App.css';

import PantryList from './Pantry/Index';
import RecipeList from './Recipes/Index';
import MixingBowl from './MixingBowl';
import Search from './Search';
import NavBar from './NavBar';
import Filter from './Filter';

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

	function getRecipes() {
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

		const recipes = unique.map((recipe) => {
			return <RecipeList name={recipe.title} />;
		});

		return recipes;
	}

	function getSelectedPantryList() {
		setSelectedPantryList({ ...selectedPantryList, [data]: true });
	}

	function getPantry() {
		fetch('http://localhost:8080/api/pantries/all')
			.then(response => response.json())
			.then(data => {
				console.log("getPantry response===> ", data)
				setPantry(data)
			})
			.catch((err) => console.error(err));
	}

	function addToPantry(event, newItem) {
		event.preventDefault(); 
		fetch('http://localhost:8080/api/pantries/add', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newItem)
		})
		.then(res => res.json())
		.then(res => {
			setPantry([...pantry, res])
		})
		.catch(err => console.error(err))
	}
	
	return (
		<Fragment>
			<NavBar />
			<div className="main">
				<div className="pantry-container">
					<div className="mixingbowl">
						{selectedPantryList}
						<MixingBowl />
					</div>
					<label htmlFor="">
						<h1>Pantry List</h1>
					</label>
					<PantryList handleAddItem={addToPantry} pantry={pantry} setSelectedPantryList={setSelectedPantryList} selectedPantryList={selectedPantryList}/>
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
						{/* <RecipeList recipes={recipeList} /> */}
						<div className="recipes">{getRecipes()}</div>
					</div>
				}
			</div>
		</Fragment>
	);
}

export default App;
