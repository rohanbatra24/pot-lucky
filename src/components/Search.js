import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bulkInfo from '../assets/api_bulk_info';
import getBulkInfo from '../assets/api_bulk_info';

export default function Search(props) {
	const [ searchText, setSearchText ] = useState('');

	// Dynamically update list of recipes based on user's search input
	const getRecipeList = () => {
		// console.log(bulk);
	};

	function onSubmit(event) {
		event.preventDefault();
		searchText &&
			axios
				.get(
					`https://api.spoonacular.com/recipes/search?query=${searchText}&number=10&apiKey=692296bbb58c433b89dba0eb2c54099b`
				)
				.then((res) => res.data.results.map((item) => item.id))
				.then((ids) => {
					if (ids) {
						return axios
							.get(
								`https://api.spoonacular.com/recipes/informationBulk?ids=${ids.join(
									','
								)}&apiKey=692296bbb58c433b89dba0eb2c54099b`
							)
							.then((res) => {
								console.log('RESULTS from api call==>', res.data);
								props.setRecipeList(res.data);
							});
					}
				})
				.catch((err) => console.error(err));
	}

	return (
		<div>
			Search:
			<form type="submit" onSubmit={onSubmit} className="search">
				<input placeholder="input search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
				<button>Submit</button>
			</form>
		</div>
	);
}
