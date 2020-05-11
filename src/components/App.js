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
	const [ selectedPantryList, setSelectedPantryList ] = useState({});

	useEffect(() => {
		// console.log("about to get pantry")
		getPantry();
	}, []);

	function getRecipes() {
		// console.log("inside getRecipes()")
		// console.log("recipeList ====>", recipeList)
		//loop filters keys, get true ones "active filters"
		// const activeFilters = Object.keys(filters).filters(f => f)
		const filtered = recipeList.filter((item) => !item.vegan);
		const recipes = filtered.map((item) => {
			return <RecipeList name={item.title} />;
		});
		// const recipes = recipeList.map((item) => {
		// 	for (let filter in filters) {
		// 		if (item[filter] === filters.filter) {
		// 			return <RecipeList name={item.title} />;
		// 		}
		// 	};
		// });
		return recipes;
	}

	function getSelectedPantryList() {
		setSelectedPantryList({ ...selectedPantryList, [data]: true });
	}

	function getPantry() {
		// fetch('http://localhost:3001')
		fetch('http://localhost:8080')
			.then((response) => {
				// console.log('response (fetch from localhost) ====>', response);
				return response.json();
			})
			.then((data) => {
				console.log('data (json from fetch from localhost) ====>', data);
				setPantry(data);
			})
			.catch((err) => console.error(err));
	}

	// console.log('pantry ====>', pantry);

	// const addPantryButtonHandler = () => {
	// 	alert(this);
	// };

	const pantryList = pantry.map((item) => {
		return (
			<Fragment>
				<h1>{item.name}</h1>
				<button
					onClick={() => setSelectedPantryList({ ...selectedPantryList, [item.name]: true })}
					data-id={item.name}
				>
					+
				</button>
			</Fragment>
		);
	});

	console.log(selectedPantryList);

	console.log('===', pantryList);

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
					<div className="pantry">{pantryList}</div>
				</div>

				{
					<div className="recipe-container">
						<Search setRecipeList={setRecipeList} />
						{/* {recipeList.length > 0 && // only show filters if there are recipes */}
						<Filter
							filters={filters}
							setFilters={setFilters}
							dishes={[ 'breakfast', 'dinner' ]}
							cuisines={[ 'italian', 'mediterranian' ]}
						/>
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
