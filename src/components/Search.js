import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import bulkInfo from '../assets/api_bulk_info';
import getBulkInfo from '../assets/api_bulk_info';

// API KEYS 
// 7a707a8f3c6b42ffb52bccfa111f4a00
// 4ed5da45f1c94518a9663b95f895c3b3
// 692296bbb58c433b89dba0eb2c54099b
// dc75b7fa4f7948ceae6ce8c4e008208e
// b183b79d7863488aaca6c2aeb086183b
// 76961f7e03aa4b47955a3ce3c98c45f6 {{{IN-USE}}}
// a59c64c98d4d4156b1e8d2992bc5ca06
// 0939358abf5240f598df923e8a915144
// a260062916e04970801d03d0db2c32b4
// 46ef327a373243b192fc86af3fa94823


const apiKey = '76961f7e03aa4b47955a3ce3c98c45f6'
export default function Search(props) {
	const [ searchText, setSearchText ] = useState('');

	// Dynamically update list of recipes based on user's search input

	function onSubmit(event) {
		event.preventDefault();
		searchText &&
			axios
				.get(
					`https://api.spoonacular.com/recipes/search?query=${searchText}&number=10&apiKey=${apiKey}`
				)
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
				`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${apiString}&apiKey=${apiKey}`
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
							)}&apiKey=${apiKey}`
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
