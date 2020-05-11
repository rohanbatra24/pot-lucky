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
	const [filters, setFilters] = useState({
    vegan: false,
    vegetarian: false,
    glutenfree: false,
    healthy: false,
    time: 0,
    rating: 0,
    cuisine: null,
    dish: null
  })
	const [pantry, setPantry] = useState([]);
	const [recipeList, setRecipeList] = useState([]);


	useEffect(() => {
		getPantry();
	}, []);

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
						{/* {recipeList.length > 0 && // only show filters if there are recipes */}
							<Filter filters={filters} setFilters={setFilters} dishes={['breakfast', 'dinner']} cuisines={['italian', 'mediterranian']} />
      			{/* } */}
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
