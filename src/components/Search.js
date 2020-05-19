import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

console.log('api key: ', process.env.SPOONACULAR_API_KEY);
// const apiKey = process.env.SPOONACULAR_API_KEY;
const apiKey = 'a260062916e04970801d03d0db2c32b4';

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
				.get(`https://api.spoonacular.com/recipes/search?query=${searchText}&number=7&apiKey=${apiKey}`)
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

		axios
			.get(
				`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${apiString}&apiKey=${apiKey}&ignorePantry=true&ranking=2`
			)
			.then((res) => {
				const noMissingIngred = res.data.filter((recipe) => {
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
					<button className="search-btn generate-recipe-btn">Generate Recipe</button>
				</form>

				<Form type="submit" onSubmit={onSubmit} className="search">
					<Form.Group>
						<Form.Control
							placeholder="Search recipes!"
							type="text"
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
							label="Search"
						/>
					</Form.Group>
					<button className="search-btn" type="submit">
						Submit
					</button>
				</Form>
			</div>
		</Fragment>
	);
}
