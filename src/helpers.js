export default function getFilteredRecipes(filters, recipeList) {
	//loop filters keys, get true ones "active filters"
	function checkFilters(currFilter, currRecipe, allFilters, isPassing) {
		// console.log("currFIlter ======", currFilter)
		switch (currFilter) {
			case 'vegan':
				isPassing = isPassing && (allFilters[currFilter] && currRecipe[currFilter]);
				break;
			case 'vegetarian':
				isPassing = isPassing && (allFilters[currFilter] && currRecipe[currFilter]);
				break;
			case 'glutenfree':
				isPassing = isPassing && (allFilters[currFilter] && currRecipe.glutenFree);
				break;
			case 'healthy':
				isPassing = isPassing && (allFilters[currFilter] && currRecipe.veryHealthy);
				break;
			case 'time':
				isPassing = isPassing && currRecipe.readyInMinutes <= allFilters.time;
				break;
			case 'rating':
				isPassing = isPassing && currRecipe.spoonacularScore >= allFilters.rating;
				break;
			case 'dish':
				// console.log("cuisine set to======", allFilters.cuisine)
				// if (allFilters.cuisine === "All") {
				//   isPassing = isPassing && true
				// } else {
				isPassing = isPassing && currRecipe.dishTypes.some((type) => allFilters.dish.includes(type));
				// }
				break;
			case 'cuisine':
				// if (allFilters.cuisine === "All") {
				//   isPassing = isPassing && true
				// } else {
				isPassing = isPassing && currRecipe.cuisines.some((type) => allFilters.cuisine.includes(type));
				// }
				break;
			default:
				isPassing = true;
		}
		return isPassing;
	}

	const activeFilters = Object.keys(filters).filter((f) => filters[f]);

	let filtered = [];

	if (activeFilters.length > 0) {
		recipeList.forEach((recipe) => {
			let satisfiedFilters = true;

			activeFilters.forEach((activeFilter) => {
				satisfiedFilters = checkFilters(activeFilter, recipe, filters, satisfiedFilters);
			});

			satisfiedFilters && filtered.push(recipe);
		});
	}
	else {
		filtered = recipeList;
	}

	let unique = [ ...new Set(filtered) ];

	// const recipes = unique.map((recipe) => {
	// 	console.log('recipe unique in app=====', recipe);
	// 	return recipe />;
	// });
	// console.log('recipes in app=====', recipes);
	// console.log('unique===', unique);
	return unique;
}
