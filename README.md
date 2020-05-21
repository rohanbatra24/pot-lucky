# PotLucky

PotLucky helps you optimize your food consumption, reduce food waste, and make fewer trips to the grocery store by suggesting recipes based on the items in your kitchen pantry.

## Getting started

PotLucky uses an external PostgreSQL API to store user information, preferences, and other data the site needs. In order to get started, please first go to the [PotLucky API](https://github.com/rohanbatra24/pot-lucky-api) github page and follow the instructions in that ReadMe. 

After setting up the PotLucky API and cloning this repo, simply run `npm start` and navigate to `localhost:3000` in your browser. Make sure you have started the PotLucky API by running `node index.js`.

## How to use Potlucky

Log in with a custom account or use the convienient `Sign in with Google` option. 

Simply input the items in your pantry, specify which items you would like to consume, and PotLucky will give you a list of popular recipes based on the items that you selected.

You can also search recipes with the search bar. This takes semantic queries, meaning that you can search for specific ingredients, like `bananas`, or more complex phrases like `gluten free brownies`. You will be informed whether or not you have the required ingredients in your pantry to make each recipe via a badge on the recipe card. 
* Green Checkmark: No missing ingredients
* Shopping Cart: Missing ingredients

If you wish, you can also filter by vegan, gluten-free, cuisine, preparation time, and more.

Click the `Details` button to see more information about the recipe. This is where you can save a recipe or perform the `Update Pantry` operation. With one click, this unique feature allows you to update each ingredient in your pantry to reflect the amount used in the recipe. 
  * i.e. if you have 4 cups of sugar in the pantry and the recipe calls for 1/2 cup, your pantry will be updated to contain 3 1/2 cups.
  
Users have the option to save ingredients as Allergies in their account. Recipes with that ingredient will be indicated with a third type of badge: an orange exclamation point.

Saved Recipes, Allergies, and the Log Out button can be found in the right hand navigation bar. 

## Tools

- PostgreSQL
- Express.js
- React.js
- Node.js
- React Bootstrap

API: [spoonacular](https://spoonacular.com/food-api)

## Final Product

# Main
!["Main page"](https://github.com/rohanbatra24/pot-lucky/blob/master/src/assets/screenshots/Main%20page.png?raw=true)

# Allergens badge
!["Allergens tooltip"](https://github.com/rohanbatra24/pot-lucky/blob/master/src/assets/screenshots/Allergens%20tooltip.png?raw=true)

# Full Recipe Modal
!["Full recipe"](https://github.com/rohanbatra24/pot-lucky/blob/master/src/assets/screenshots/Full%20recipe.png?raw=true)

# Missing ingredients badge
!["Missing ingredients"](https://github.com/rohanbatra24/pot-lucky/blob/master/src/assets/screenshots/Missing%20ingredients%20tooltip.png?raw=true)

# User preferences dropdown
!["User prefs dropdown"](https://github.com/rohanbatra24/pot-lucky/blob/master/src/assets/screenshots/User%20pref%20dropdown.png?raw=true)

# Allergies modal
!["allergies"](https://github.com/rohanbatra24/pot-lucky/blob/master/src/assets/screenshots/allergies.png?raw=true)

## Collaborators

[Kelsey Griffin](https://github.com/kelsey-griffin)  
[Rohan Batra](https://github.com/rohanbatra24)  
[Derek Nugroho](https://github.com/dereknugroho)
