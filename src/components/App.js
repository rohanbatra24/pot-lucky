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
import getFilteredRecipes from '../helpers';

function App() {
	// const auth0 = useContext(Auth0Context);
	const { isLoading, user, userDb, loginWithRedirect, logout } = useAuth0();
	console.log('user==', user);
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

	useEffect(
		() => {
			if (user) {
				getUserFromDb(user.email);
			}
			else console.log('no user');

			getIngredients();
		},
		[ user ]
	);

	function getUserFromDb(userEmail) {
		fetch(`http://localhost:8080/api/users/${userEmail}`)
			.then((response) => response.json())
			.then((data) => {
				console.log('user data from backend===', data);
				return data;
			})
			.then((data) => {
				if (data) {
					console.log('data[0].id===', data[0].id);
					getPantry(data[0].id);
				}
				else {
					console.log('need to create user');
				}
			})
			.catch((err) => console.error(err));
	}

	function getIngredients() {
		fetch('http://localhost:8080/api/ingredients/all')
			.then((response) => response.json())
			.then((data) => {
				// console.log('getIngredients response===> ', data);
				setIngredients(data);
			})
			.catch((err) => console.error(err));
	}

	function getPantry(id) {
		fetch(`http://localhost:8080/api/pantries/${id}`)
			.then((response) => response.json())
			.then((data) => {
				// console.log('getPantry response===> ', data);
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
		// console.log('itemID===', itemId);
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

				{
					<div className="recipe-container">
						<div className="hero is-info is-fullheight">
							<div className="hero-body">
								<div className="container has-text-centered">
									{!isLoading &&
									!user && (
										<Fragment>
											<h1>Click Below!</h1>
											<button onClick={loginWithRedirect} className="button is-danger">
												Login
											</button>
										</Fragment>
									)}
									{!isLoading &&
									user && (
										<Fragment>
											<h1>You are logged in!</h1>
											<p>Hello {user.name}</p>

											{user.picture && <img src={user.picture} alt="My Avatar" />}
											<button
												onClick={() => logout({ returnTo: window.location.origin })}
												className="button is-small is-dark"
											>
												Logout
											</button>
										</Fragment>
									)}
								</div>
							</div>
						</div>
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
				}
			</div>
		</Fragment>
	);
}

export default App;
