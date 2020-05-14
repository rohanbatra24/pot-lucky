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
import getFilteredRecipes from '../helpers';

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
	const [ingredients, setIngredients] = useState([])
	const [ pantry, setPantry ] = useState([]);
	const [ recipeList, setRecipeList ] = useState([]);
	const [ selectedPantryList, setSelectedPantryList ] = useState([]);

	useEffect(() => {
		getPantry();
		getIngredients()
	}, []);

	function getIngredients() {
		fetch('http://localhost:8080/api/ingredients/all')
			.then((response) => response.json())
			.then((data) => {
        console.log('getIngredients response===> ', data);
        setIngredients(data);
			})
			.catch((err) => console.error(err));
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
						ingredients={ingredients}
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
						<RecipeList recipes={getFilteredRecipes(filters, recipeList)} />
						{/* <div className="recipes">{getRecipes()}</div> */}
					</div>
				}
			</div>
		</Fragment>
	);
}

export default App;
