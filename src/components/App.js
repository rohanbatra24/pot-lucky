import React, { Fragment, useState, useEffect } from 'react';
import { useAuth0 } from '../contexts/auth0-context';

import '../hooks/useApplicationData';
import '../App.css';
import '../App.scss';

import PantryList from './Pantry/PantryList';
import RecipeList from './Recipes/RecipeList';
import MixingBowl from './MixingBowl';
import Search from './Search';
import NavBar from './NavBar';
import Filter from './Filter';
import SelectedPantry from './Pantry/SelectedPantry';
import Unauthorized from './Unauthorized';
import getFilteredRecipes from '../helpers';

import { Spinner } from 'react-bootstrap';

function App() {
	// const auth0 = useContext(Auth0Context);
	const { isLoading, user } = useAuth0();
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

	const [ fullUser, setFullUser ] = useState({ id: '', email: '', allergies: [], savedRecipes: [] });

	useEffect(
		() => {
			user && getUserFromDb(user.email);
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

					const allergyList = data.filter((item) => item.allergy).map((item) => item.allergy);

					const savedRecipesList = data.filter((item) => item.url).map((item) => {
						return {
							url   : item.url,
							title : item.title,
							image : item.image
						};
					});
					setFullUser({
						id           : data[0].id,
						email        : data[0].email,
						allergies    : allergyList,
						savedRecipes : savedRecipesList
					});
				}
				else {
					addUserToDb(user.email);
				}
			})
			.catch((err) => console.error(err));
	}

	function addUserToDb(newEmail) {
		const email = { email: newEmail };
		fetch('http://localhost:8080/api/users/add', {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(email)
		})
			.then((response) => response.json())
			.then((data) => {
				getPantry(data.id);
				setFullUser({ ...fullUser, id: data.id, email: data.email, allergies: [] });
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
		const itemWithId = { ...newItem, id: fullUser.id };

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

				getPantry(fullUser.id);
			})
			.catch((err) => console.error(err));
	}

	function editInPantry(event, values) {
		event.preventDefault();
		fetch(`http://localhost:8080/api/pantries/${fullUser.id}/edit`, {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(values)
		})
			.then((res) => {
				// const copy = pantry.find(item => item.id === values.itemId)
				// const updatedCopy = {...copy, unit: values.unit, quantity: values.quantity, expiry: values.expiry}

				// setPantry({...pantry, unit: values.unit, quantity: values.quantity, expiry: values.expiry})
				getPantry(fullUser.id);
			})
			.catch((err) => console.error(err));
	}

	function addAllergy(event, newAllergy) {
		event.preventDefault();
		const itemWithId = { allergy: newAllergy };

		fetch(`http://localhost:8080/api/users/${fullUser.id}/allergies/add`, {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(itemWithId)
		})
			.then((res) => res.json())
			.then((res) => {
				const copy = [ ...fullUser.allergies, res.name ];
				setFullUser({ ...fullUser, allergies: copy });
			})
			.catch((err) => console.error(err));
	}

	function deleteAllergy(event, ingredient) {
		event.preventDefault();
		fetch(`http://localhost:8080/api/users/${fullUser.id}/allergies/delete`, {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify({ ingredient: ingredient })
		})
			.then((res) => {
				const copy = fullUser.allergies;
				const updated = copy.filter((allergy) => allergy !== ingredient);
				setFullUser({ ...fullUser, allergies: updated });
				getPantry(fullUser.id);
			})
			.catch((err) => console.error(err));
	}

	function addSavedRecipe(event, newSavedRecipe) {
		event.preventDefault();
		// const itemWithId = { allergy: newAllergy };

		fetch(`http://localhost:8080/api/users/${fullUser.id}/savedRecipes/add`, {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify({ newSavedRecipe })
		})
			.then((res) => res.json())
			.then((res) => {
				const copy = [ ...fullUser.savedRecipes, res ];
				setFullUser({ ...fullUser, savedRecipes: copy });
			})
			.catch((err) => console.error(err));
	}

	function deleteSavedRecipe(event, url) {
		event.preventDefault();
		fetch(`http://localhost:8080/api/users/${fullUser.id}/savedRecipes/delete`, {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify({ url: url })
		})
			.then((res) => {
				const copy = fullUser.savedRecipes;
				const updated = copy.filter((savedRecipe) => savedRecipe.url !== url);
				setFullUser({ ...fullUser, savedRecipes: updated });
				getPantry(fullUser.id);
			})
			.catch((err) => console.error(err));
	}

	//////////////
	if (user && !isLoading) {
		return (
			<Fragment>
				<NavBar
					savedRecipes={fullUser.savedRecipes}
					allergies={fullUser.allergies}
					ingredients={ingredients}
					handleAddAllergy={addAllergy}
					handleDeleteAllergy={deleteAllergy}
					deleteSavedRecipe={deleteSavedRecipe}
				/>
				<div className="main">
					<div className="pantry-container">
						<div className="mixingbowl">
							{/* <MixingBowl /> */}
							<SelectedPantry
								selectedPantryList={selectedPantryList}
								setSelectedPantryList={setSelectedPantryList}
							/>
						</div>
						<h3>What's in my kitchen?</h3>
						<PantryList
							handleAddItem={addToPantry}
							pantry={pantry}
							setSelectedPantryList={setSelectedPantryList}
							selectedPantryList={selectedPantryList}
							handleDeleteItem={deleteFromPantry}
							handleEditItem={editInPantry}
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
						{/* <label htmlFor="">
							<h1>Recipes</h1>
						</label> */}
						<RecipeList
							pantry={pantry}
							allergies={fullUser.allergies}
							recipes={getFilteredRecipes(filters, recipeList)}
							addSavedRecipe={addSavedRecipe}
						/>
						{/* <div className="recipes">{getRecipes()}</div> */}
					</div>
				</div>
			</Fragment>
		);
	}
	else if (!user && !isLoading) {
		return <Unauthorized />;
	}
	else {
		return (
			<Spinner animation="border" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
		);
	}
}

export default App;
