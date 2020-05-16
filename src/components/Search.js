import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

console.log('api key: ', process.env.SPOONACULAR_API_KEY);
// const apiKey = process.env.SPOONACULAR_API_KEY;
const apiKey = '12929083c5c94e82b9a852cdb0c09641';

export default function Search(props) {
	const [ searchText, setSearchText ] = useState('');

	// Dynamically update list of recipes based on user's search input

	function onSubmit(event) {
		event.preventDefault();

		//reset filters
		props.setFilters({
			vegan      : false,
			vegetarian : false,
			glutenfree : false,
			healthy    : false,
			time       : 0,
			rating     : 0,
			cuisine    : null,
			dish       : null
		});

		searchText &&
			axios
				.get(`https://api.spoonacular.com/recipes/search?query=${searchText}&number=200&apiKey=${apiKey}`)
				.then((res) => res.data.results.map((item) => item.id))
				.then((ids) => {
					if (ids) {
						return axios
							.get(
								`https://api.spoonacular.com/recipes/informationBulk?ids=${ids.join(
									','
								)}&apiKey=${apiKey}`
							)
							.then((res) => {
								console.log('RESULTS from api call==>', res.data);
								props.setRecipeList(res.data);
							});
					}
				})
				.catch((err) => console.error(err));
	}

	function handleGenerateRecipe(event) {
		event.preventDefault();
		props.setFilters({
			vegan      : false,
			vegetarian : false,
			glutenfree : false,
			healthy    : false,
			time       : 0,
			rating     : 0,
			cuisine    : null,
			dish       : null
		});
		const pantryArr = [];

		for (let pantryItem of props.selectedPantryList) {
			pantryArr.push(pantryItem);
		}

		const apiString = pantryArr.join(',+');

		//api.spoonacular.com/recipes/findByIngredients?ingredients=banana,+sugar,+turnip&apiKey=692296bbb58c433b89dba0eb2c54099b

		// search by ingredients
		// params: ranking=2 (minimize missing ingredients)
		//         ignorePantry=true (ignore common pantry items like water, flour)
		axios
			.get(
				`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${apiString}&apiKey=${apiKey}&ignorePantry=true&ranking=2`
			)
			.then((res) => {
				// console.log('first log from generate: ', res.data);
				const noMissingIngred = res.data.filter((recipe) => {
					// console.log('recipe =====> ', recipe.missedIngredientCount);
					return recipe.missedIngredientCount < 1;
				});
				if (noMissingIngred.length) {
					return noMissingIngred.map((item) => item.id);
				}
				else {
					props.setRecipeList([]);
					throw new Error('Oops! Need to add more items to your search. No recipes found.');
				}
			})
			.then((ids) => {
				if (ids) {
					return axios
						.get(
							`https://api.spoonacular.com/recipes/informationBulk?ids=${ids.join(',')}&apiKey=${apiKey}`
						)
						.then((res) => {
							console.log('RESULTS from BULK api call==>', res.data);
							props.setRecipeList(res.data);
						});
				}
			})
			.catch((err) => console.error(err));
	}

	return (
		<Fragment>
			<div className="search-container">
				<form type="submit" onSubmit={handleGenerateRecipe}>
					<button className="generate-recipe-btn">Generate Recipe</button>
				</form>
				<div>
					<form type="submit" onSubmit={onSubmit} className="search">
						<input
							placeholder="Search recipes!"
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
						/>
						<button>Submit</button>
					</form>
				</div>
			</div>
		</Fragment>
	);
}
