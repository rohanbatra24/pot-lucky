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

import { Alert, Image } from 'react-bootstrap';

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
	const [ recipeState, setRecipeState ] = useState('empty');
	const [ fullUser, setFullUser ] = useState({ id: '', email: '', allergies: [], savedRecipes: [] });

	useEffect(
		() => {
			user && getUserFromDb(user.email);
			getIngredients();
		},
		[ user ]
	);

	function getUserFromDb(userEmail) {
		fetch(`https://pot-lucky1.herokuapp.com/api/users/${userEmail}`)
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.then((data) => {
				if (data.length) {
					getPantry(data[0].id);

					const allergyList = data.filter((item) => item.allergy).map((item) => item.allergy);
					const allergySet = new Set(allergyList);
					console.log('allergy set', allergySet);
					console.log('allergy list===', allergyList);
					console.log('data===', data);

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
						allergies    : [ ...allergySet ],
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
		fetch('https://pot-lucky1.herokuapp.com/api/users/add', {
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
		fetch('https://pot-lucky1.herokuapp.com/api/ingredients/all')
			.then((response) => response.json())
			.then((data) => {
				setIngredients(data);
			})
			.catch((err) => console.error(err));
	}

	function getPantry(id) {
		fetch(`https://pot-lucky1.herokuapp.com/api/pantries/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setPantry(data);
			})
			.catch((err) => console.error(err));
	}

	function addToPantry(event, newItem) {
		event.preventDefault();
		const itemWithId = { ...newItem, id: fullUser.id };

		fetch('https://pot-lucky1.herokuapp.com/api/pantries/add', {
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
		fetch('https://pot-lucky1.herokuapp.com/api/pantries/delete', {
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
		fetch(`https://pot-lucky1.herokuapp.com/api/pantries/${fullUser.id}/edit`, {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(values)
		})
			.then((res) => {
				getPantry(fullUser.id);
			})
			.catch((err) => console.error(err));
	}

	function addAllergy(event, newAllergy) {
		event.preventDefault();
		const itemWithId = { allergy: newAllergy };

		fetch(`https://pot-lucky1.herokuapp.com/api/users/${fullUser.id}/allergies/add`, {
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
		fetch(`https://pot-lucky1.herokuapp.com/api/users/${fullUser.id}/allergies/delete`, {
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

		fetch(`https://pot-lucky1.herokuapp.com/api/users/${fullUser.id}/savedRecipes/add`, {
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
		fetch(`https://pot-lucky1.herokuapp.com/api/users/${fullUser.id}/savedRecipes/delete`, {
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
							setRecipeState={setRecipeState}
							setFilters={setFilters}
						/>
						{/* {recipeList.length > 0 && // only show filters if there are recipes */}
						<Filter filters={filters} setFilters={setFilters} recipeList={recipeList} />
						{/* } */}
						{/* <label htmlFor="">
							<h1>Recipes</h1>
						</label> */}
						<RecipeList
							recipeState={recipeState}
							editInPantry={editInPantry}
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
			<div className="loading-app">
				<Alert key={1} variant="success" className="loading-alert">
					Patience, hungry one!<br />
					Good food takes time!
				</Alert>
				<Image
					className="loading-img"
					src="https://i.pinimg.com/originals/60/f1/c4/60f1c4968273fc566e7de76aac88d61c.gif"
					alt="Loading"
				/>
			</div>
		);
	}
}

export default App;
