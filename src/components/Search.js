import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import bulkInfo from '../assets/api_bulk_info';
import getBulkInfo from '../assets/api_bulk_info';

export default function Search(props) {
	const [ searchText, setSearchText ] = useState('');

	// Dynamically update list of recipes based on user's search input

	function onSubmit(event) {
		event.preventDefault();
		searchText &&
			axios
				.get(
					`https://api.spoonacular.com/recipes/search?query=${searchText}&number=10&apiKey=dc75b7fa4f7948ceae6ce8c4e008208e`
				)
				.then((res) => res.data.results.map((item) => item.id))
				.then((ids) => {
					if (ids) {
						return axios
							.get(
								`https://api.spoonacular.com/recipes/informationBulk?ids=${ids.join(
									','
								)}&apiKey=dc75b7fa4f7948ceae6ce8c4e008208e`
							)
							.then((res) => {
								console.log('RESULTS from api call==>', res.data);
								props.setRecipeList(res.data);
							});
					}
					g;
				})
				.catch((err) => console.error(err));
	}

	function handleGenerateRecipe(event) {
		event.preventDefault();

		const pantryArr = [];

		for (let pantryItem of props.selectedPantryList) {
			pantryArr.push(pantryItem);
		}

		const apiString = pantryArr.join(',+');

		//api.spoonacular.com/recipes/findByIngredients?ingredients=banana,+sugar,+turnip&apiKey=692296bbb58c433b89dba0eb2c54099b

		axios
			.get(
				`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${apiString}&apiKey=dc75b7fa4f7948ceae6ce8c4e008208e`
			)
			.then((res) => {
				console.log(res.data);
				return res.data.map((item) => item.id);
			})
			.then((ids) => {
				console.log(ids);
				if (ids) {
					return axios
						.get(
							`https://api.spoonacular.com/recipes/informationBulk?ids=${ids.join(
								','
							)}&apiKey=dc75b7fa4f7948ceae6ce8c4e008208e`
						)
						.then((res) => {
							console.log('RESULTS from api call==>', res.data);
							console.log(res);
							props.setRecipeList(res.data);
						});
				}
			})
			.catch((err) => console.error(err));
	}

	return (
		<Fragment>
			<div>
				<form type="submit" onSubmit={handleGenerateRecipe}>
					<button>Generate Recipe</button>
				</form>
			</div>
			<div>
				Search by text:
				<form type="submit" onSubmit={onSubmit} className="search">
					<input
						placeholder="input search"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<button>Submit</button>
				</form>
			</div>
		</Fragment>
	);
}
