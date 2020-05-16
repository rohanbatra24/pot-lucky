import React, { Fragment, useState, useEffect } from 'react';
import { useAuth0 } from '../contexts/auth0-context';

import '../hooks/useApplicationData';
import '../App.css';

import PantryList from './Pantry/PantryList';
import RecipeList from './Recipes/RecipeList';
import MixingBowl from './MixingBowl';
import Search from './Search';
import NavBar from './NavBar';
import Filter from './Filter';
import SelectedPantry from './Pantry/SelectedPantry';
import Unauthorized from './Unauthorized'
import getFilteredRecipes from '../helpers';

function App() {
	// const auth0 = useContext(Auth0Context);
	const { isLoading, user, loginWithRedirect, logout } = useAuth0();
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
	const [ ingredients, setIngredients ] = useState([]);
	const [ pantry, setPantry ] = useState([]);
	const [ recipeList, setRecipeList ] = useState([]);
	const [ selectedPantryList, setSelectedPantryList ] = useState([]);
	
	const [userId, setUserId] = useState("");

	useEffect(
		() => {
			user &&	getUserFromDb(user.email);
			getIngredients();
		},
		[ user ]
	);

	function getUserFromDb(userEmail) {
		fetch(`http://localhost:8080/api/users/${userEmail}`)
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.then((data) => {
				if (data.length) {
					getPantry(data[0].id);
					setUserId(data[0].id);
				}
				else {
					addUserToDb(user.email)					
				}
			})
			.catch((err) => console.error(err));
	}


	function addUserToDb(newEmail) {
		const email = {"email": newEmail}
		fetch('http://localhost:8080/api/users/add', {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(email)
			})
			.then((response) => response.json())
			.then((data) => {
				getPantry(data.id)
				setUserId(data.id);
			})
			.catch((err) => console.error(err));
	}
	function getIngredients() {
		fetch('http://localhost:8080/api/ingredients/all')
			.then((response) => response.json())
			.then((data) => {
				setIngredients(data);
			})
			.catch((err) => console.error(err));
	}

	function getPantry(id) {
		fetch(`http://localhost:8080/api/pantries/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setPantry(data);
			})
			.catch((err) => console.error(err));
	}

	function addToPantry(event, newItem) {
		event.preventDefault();
		const itemWithId = {...newItem, id: userId }

		fetch('http://localhost:8080/api/pantries/add', {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(itemWithId)
		})
			.then((res) => res.json())
			.then((res) => {
				setPantry([ ...pantry, res ]);
			})
			.catch((err) => console.error(err));
	}

	function deleteFromPantry(event, itemId, name) {
		event.preventDefault();
		fetch('http://localhost:8080/api/pantries/delete', {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify({ id: itemId })
		})
			.then((res) => {
				setSelectedPantryList(selectedPantryList.filter((item) => item !== name));

				getPantry(userId);
			})
			.catch((err) => console.error(err));
	}
	if (user) {
		return (
			<Fragment>
			<NavBar />
				<div className="main">
					<div className="pantry-container">
						<div className="mixingbowl">
							<MixingBowl />
							<SelectedPantry
								selectedPantryList={selectedPantryList}
								setSelectedPantryList={setSelectedPantryList}
							/>
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
						<div className="recipe-container">
							<Search
								selectedPantryList={selectedPantryList}
								setRecipeList={setRecipeList}
								setFilters={setFilters}
							/>
							{/* {recipeList.length > 0 && // only show filters if there are recipes */}
							<Filter filters={filters} setFilters={setFilters} recipeList={recipeList} />
							{/* } */}
							<label htmlFor="">
								<h1>Recipes</h1>
							</label>
							<RecipeList recipes={getFilteredRecipes(filters, recipeList)} />
							{/* <div className="recipes">{getRecipes()}</div> */}
						</div>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Unauthorized />
		)
	}
}

export default App;
