const bulkInfo = [
  {
  vegetarian: true,
  vegan: false,
  glutenFree: true,
  dairyFree: false,
  veryHealthy: true,
  cheap: false,
  veryPopular: true,
  sustainable: false,
  weightWatcherSmartPoints: 4,
  gaps: "no",
  lowFodmap: false,
  preparationMinutes: 15,
  cookingMinutes: 0,
  aggregateLikes: 753,
  spoonacularScore: 100,
  healthScore: 100,
  creditsText: "Cookin Canuck",
  sourceName: "Cookin Canuck",
  pricePerServing: 127.34,
  extendedIngredients: [
  {
  id: 19912,
  aisle: "Ethnic Foods;Health Foods",
  image: "agave.png",
  consistency: "liquid",
  name: "agave nectar",
  original: "½ tsp agave nectar or honey",
  originalString: "½ tsp agave nectar or honey",
  originalName: "agave nectar or honey",
  amount: 0.5,
  unit: "tsp",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 0.5,
  unitShort: "tsps",
  unitLong: "teaspoons"
  },
  metric: {
  amount: 0.5,
  unitShort: "tsps",
  unitLong: "teaspoons"
  }
  }
  },
  {
  id: 1019,
  aisle: "Cheese",
  image: "feta.png",
  consistency: "solid",
  name: "feta cheese",
  original: "1 ½ oz. (1/4 cup) crumbled feta cheese",
  originalString: "1 ½ oz. (1/4 cup) crumbled feta cheese",
  originalName: "½ oz. crumbled feta cheese",
  amount: 0.25,
  unit: "cup",
  meta: [
  "crumbled"
  ],
  metaInformation: [
  "crumbled"
  ],
  measures: {
  us: {
  amount: 0.25,
  unitShort: "cups",
  unitLong: "cups"
  },
  metric: {
  amount: 59.147,
  unitShort: "ml",
  unitLong: "milliliters"
  }
  }
  },
  {
  id: 1002030,
  aisle: "Spices and Seasonings",
  image: "pepper.jpg",
  consistency: "solid",
  name: "ground pepper",
  original: "1/8 tsp ground pepper",
  originalString: "1/8 tsp ground pepper",
  originalName: "ground pepper",
  amount: 0.125,
  unit: "tsp",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 0.125,
  unitShort: "tsps",
  unitLong: "teaspoons"
  },
  metric: {
  amount: 0.125,
  unitShort: "tsps",
  unitLong: "teaspoons"
  }
  }
  },
  {
  id: 12120,
  aisle: "Baking",
  image: "hazelnuts.jpg",
  consistency: "solid",
  name: "hazelnuts",
  original: "3 tbsp toasted chopped hazelnuts",
  originalString: "3 tbsp toasted chopped hazelnuts",
  originalName: "toasted chopped hazelnuts",
  amount: 3,
  unit: "tbsp",
  meta: [
  "toasted",
  "chopped"
  ],
  metaInformation: [
  "toasted",
  "chopped"
  ],
  measures: {
  us: {
  amount: 3,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  },
  metric: {
  amount: 3,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  }
  }
  },
  {
  id: 11233,
  aisle: "Produce",
  image: "kale.jpg",
  consistency: "solid",
  name: "kale",
  original: "4-5 large kale leaves, stems removed, leaves chopped (about 5 cups)",
  originalString: "4-5 large kale leaves, stems removed, leaves chopped (about 5 cups)",
  originalName: "4-5 large kale leaves, stems removed, leaves chopped (about",
  amount: 5,
  unit: "cups",
  meta: [
  "chopped"
  ],
  metaInformation: [
  "chopped"
  ],
  measures: {
  us: {
  amount: 5,
  unitShort: "cups",
  unitLong: "cups"
  },
  metric: {
  amount: 1.183,
  unitShort: "l",
  unitLong: "liters"
  }
  }
  },
  {
  id: 4053,
  aisle: "Oil, Vinegar, Salad Dressing",
  image: "olive-oil.jpg",
  consistency: "liquid",
  name: "olive oil",
  original: "2 tbsp extra-virgin olive oil",
  originalString: "2 tbsp extra-virgin olive oil",
  originalName: "extra-virgin olive oil",
  amount: 2,
  unit: "tbsp",
  meta: [
  "extra-virgin"
  ],
  metaInformation: [
  "extra-virgin"
  ],
  measures: {
  us: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  },
  metric: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  }
  }
  },
  {
  id: 9206,
  aisle: "Beverages",
  image: "orange-juice.jpg",
  consistency: "liquid",
  name: "orange juice",
  original: "2 tbsp fresh orange juice",
  originalString: "2 tbsp fresh orange juice",
  originalName: "fresh orange juice",
  amount: 2,
  unit: "tbsp",
  meta: [
  "fresh"
  ],
  metaInformation: [
  "fresh"
  ],
  measures: {
  us: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  },
  metric: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  }
  }
  },
  {
  id: 2047,
  aisle: "Spices and Seasonings",
  image: "salt.jpg",
  consistency: "solid",
  name: "salt",
  original: "1/8 tsp salt",
  originalString: "1/8 tsp salt",
  originalName: "salt",
  amount: 0.125,
  unit: "tsp",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 0.125,
  unitShort: "tsps",
  unitLong: "teaspoons"
  },
  metric: {
  amount: 0.125,
  unitShort: "tsps",
  unitLong: "teaspoons"
  }
  }
  },
  {
  id: 9316,
  aisle: "Produce",
  image: "strawberries.png",
  consistency: "solid",
  name: "strawberries",
  original: "1 ½ cups sliced strawberries",
  originalString: "1 ½ cups sliced strawberries",
  originalName: "sliced strawberries",
  amount: 1.5,
  unit: "cups",
  meta: [
  "sliced"
  ],
  metaInformation: [
  "sliced"
  ],
  measures: {
  us: {
  amount: 1.5,
  unitShort: "cups",
  unitLong: "cups"
  },
  metric: {
  amount: 354.882,
  unitShort: "ml",
  unitLong: "milliliters"
  }
  }
  }
  ],
  id: 584792,
  title: "Strawberry & Kale Salad with Feta Cheese",
  readyInMinutes: 15,
  servings: 4,
  sourceUrl: "http://www.cookincanuck.com/2014/04/strawberry-kale-salad-recipe-with-feta-cheese/",
  image: "https://spoonacular.com/recipeImages/584792-556x370.jpg",
  imageType: "jpg",
  summary: `Strawberry & Kale Salad with Feta Cheese is a <b>gluten free and vegetarian</b> side dish. This recipe makes 4 servings with <b>199 calories</b>, <b>6g of protein</b>, and <b>15g of fat</b> each. For <b>$1.27 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. 752 people have made this recipe and would make it again. A mixture of strawberries, hazelnuts, ground pepper, and a handful of other ingredients are all it takes to make this recipe so flavorful. It can be enjoyed any time, but it is especially good for <b>Mother's Day</b>. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is super. Try <a href="https://spoonacular.com/recipes/massaged-kale-and-craisin-salad-with-feta-cheese-569644">Massaged Kale and Craisin Salad with Feta Cheese</a>, <a href="https://spoonacular.com/recipes/chopped-kale-salad-with-grapes-feta-cheese-584854">Chopped Kale Salad with Grapes & Feta Cheese</a>, and <a href="https://spoonacular.com/recipes/quinoa-salad-with-kale-watermelon-grapes-and-feta-cheese-530083">Quinoa Salad with Kale, Watermelon, Grapes and Feta Cheese</a> for similar recipes.`,
  cuisines: [ ],
  dishTypes: [
  "salad"
  ],
  diets: [
  "gluten free",
  "lacto ovo vegetarian"
  ],
  occasions: [
  "mother's day"
  ],
  winePairing: { },
  instructions: "Place the kale in a colander and massage in warm running water until tender.In a large bowl, combine the kale, strawberries, feta cheese and hazelnuts. Toss gently.In a small bowl, whisk together the orange juice, olive oil, agave nectar (or honey), salt and pepper.Pour the dressing over the salad and toss to coat. Serve.",
  analyzedInstructions: [
  {
  name: "",
  steps: [
  {
  number: 1,
  step: "Place the kale in a colander and massage in warm running water until tender.In a large bowl, combine the kale, strawberries, feta cheese and hazelnuts. Toss gently.In a small bowl, whisk together the orange juice, olive oil, agave nectar (or honey), salt and pepper.",
  ingredients: [
  {
  id: 1102047,
  name: "salt and pepper",
  image: "salt-and-pepper.jpg"
  },
  {
  id: 19912,
  name: "agave",
  image: "agave.png"
  },
  {
  id: 9206,
  name: "orange juice",
  image: "orange-juice.jpg"
  },
  {
  id: 9316,
  name: "strawberries",
  image: "strawberries.png"
  },
  {
  id: 1019,
  name: "feta cheese",
  image: "feta.png"
  },
  {
  id: 12120,
  name: "hazelnuts",
  image: "hazelnuts.jpg"
  },
  {
  id: 4053,
  name: "olive oil",
  image: "olive-oil.jpg"
  },
  {
  id: 11233,
  name: "kale",
  image: "kale.jpg"
  }
  ],
  equipment: [
  {
  id: 404639,
  name: "colander",
  image: "colander.jpg"
  },
  {
  id: 404661,
  name: "whisk",
  image: "whisk.png"
  },
  {
  id: 404783,
  name: "bowl",
  image: "bowl.jpg"
  }
  ]
  },
  {
  number: 2,
  step: "Pour the dressing over the salad and toss to coat.",
  ingredients: [ ],
  equipment: [ ]
  },
  {
  number: 3,
  step: "Serve.",
  ingredients: [ ],
  equipment: [ ]
  }
  ]
  }
  ],
  originalId: null
  },
  {
  vegetarian: true,
  vegan: false,
  glutenFree: true,
  dairyFree: false,
  veryHealthy: true,
  cheap: false,
  veryPopular: true,
  sustainable: false,
  weightWatcherSmartPoints: 3,
  gaps: "no",
  lowFodmap: false,
  preparationMinutes: 15,
  cookingMinutes: 0,
  aggregateLikes: 1055,
  spoonacularScore: 100,
  healthScore: 92,
  creditsText: "Cookin Canuck",
  sourceName: "Cookin Canuck",
  pricePerServing: 90.07,
  extendedIngredients: [
  {
  id: 19912,
  aisle: "Ethnic Foods;Health Foods",
  image: "agave.png",
  consistency: "liquid",
  name: "agave nectar",
  original: "1/2 tsp agave nectar or honey",
  originalString: "1/2 tsp agave nectar or honey",
  originalName: "agave nectar or honey",
  amount: 0.5,
  unit: "tsp",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 0.5,
  unitShort: "tsps",
  unitLong: "teaspoons"
  },
  metric: {
  amount: 0.5,
  unitShort: "tsps",
  unitLong: "teaspoons"
  }
  }
  },
  {
  id: 1019,
  aisle: "Cheese",
  image: "feta.png",
  consistency: "solid",
  name: "feta cheese",
  original: "1/4 cup crumbled feta cheese",
  originalString: "1/4 cup crumbled feta cheese",
  originalName: "crumbled feta cheese",
  amount: 0.25,
  unit: "cup",
  meta: [
  "crumbled"
  ],
  metaInformation: [
  "crumbled"
  ],
  measures: {
  us: {
  amount: 0.25,
  unitShort: "cups",
  unitLong: "cups"
  },
  metric: {
  amount: 59.147,
  unitShort: "ml",
  unitLong: "milliliters"
  }
  }
  },
  {
  id: 1002030,
  aisle: "Spices and Seasonings",
  image: "pepper.jpg",
  consistency: "solid",
  name: "ground pepper",
  original: "1/8 tsp ground pepper",
  originalString: "1/8 tsp ground pepper",
  originalName: "ground pepper",
  amount: 0.125,
  unit: "tsp",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 0.125,
  unitShort: "tsps",
  unitLong: "teaspoons"
  },
  metric: {
  amount: 0.125,
  unitShort: "tsps",
  unitLong: "teaspoons"
  }
  }
  },
  {
  id: 11233,
  aisle: "Produce",
  image: "kale.jpg",
  consistency: "solid",
  name: "kale",
  original: "3-4 large kale leaves, stems removed, leaves chopped (about 5 cups)",
  originalString: "3-4 large kale leaves, stems removed, leaves chopped (about 5 cups)",
  originalName: "3-4 large kale leaves, stems removed, leaves chopped (about",
  amount: 5,
  unit: "cups",
  meta: [
  "chopped"
  ],
  metaInformation: [
  "chopped"
  ],
  measures: {
  us: {
  amount: 5,
  unitShort: "cups",
  unitLong: "cups"
  },
  metric: {
  amount: 1.183,
  unitShort: "l",
  unitLong: "liters"
  }
  }
  },
  {
  id: 9152,
  aisle: "Produce",
  image: "lemon-juice.jpg",
  consistency: "liquid",
  name: "lemon juice",
  original: "2 tbsp fresh lemon juice",
  originalString: "2 tbsp fresh lemon juice",
  originalName: "fresh lemon juice",
  amount: 2,
  unit: "tbsp",
  meta: [
  "fresh"
  ],
  metaInformation: [
  "fresh"
  ],
  measures: {
  us: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  },
  metric: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  }
  }
  },
  {
  id: 4053,
  aisle: "Oil, Vinegar, Salad Dressing",
  image: "olive-oil.jpg",
  consistency: "liquid",
  name: "olive oil",
  original: "2 tbsp extra-virgin olive oil",
  originalString: "2 tbsp extra-virgin olive oil",
  originalName: "extra-virgin olive oil",
  amount: 2,
  unit: "tbsp",
  meta: [
  "extra-virgin"
  ],
  metaInformation: [
  "extra-virgin"
  ],
  measures: {
  us: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  },
  metric: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  }
  }
  },
  {
  id: 9132,
  aisle: "Produce",
  image: "red-grapes.jpg",
  consistency: "solid",
  name: "red grapes",
  original: "1 cup red grapes, cut in half",
  originalString: "1 cup red grapes, cut in half",
  originalName: "red grapes, cut in half",
  amount: 1,
  unit: "cup",
  meta: [
  "red",
  "cut in half"
  ],
  metaInformation: [
  "red",
  "cut in half"
  ],
  measures: {
  us: {
  amount: 1,
  unitShort: "cup",
  unitLong: "cup"
  },
  metric: {
  amount: 236.588,
  unitShort: "ml",
  unitLong: "milliliters"
  }
  }
  },
  {
  id: 2047,
  aisle: "Spices and Seasonings",
  image: "salt.jpg",
  consistency: "solid",
  name: "salt",
  original: "1/8 tsp salt",
  originalString: "1/8 tsp salt",
  originalName: "salt",
  amount: 0.125,
  unit: "tsp",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 0.125,
  unitShort: "tsps",
  unitLong: "teaspoons"
  },
  metric: {
  amount: 0.125,
  unitShort: "tsps",
  unitLong: "teaspoons"
  }
  }
  }
  ],
  id: 584854,
  title: "Chopped Kale Salad with Grapes & Feta Cheese",
  readyInMinutes: 15,
  servings: 4,
  sourceUrl: "http://www.cookincanuck.com/2013/07/chopped-kale-salad-recipe-with-grapes-feta-cheese/",
  image: "https://spoonacular.com/recipeImages/584854-556x370.jpg",
  imageType: "jpg",
  summary: `Need a <b>gluten free and vegetarian side dish</b>? Chopped Kale Salad with Grapes & Feta Cheese could be an outstanding recipe to try. This recipe serves 4 and costs 90 cents per serving. One serving contains <b>158 calories</b>, <b>5g of protein</b>, and <b>10g of fat</b>. Plenty of people made this recipe, and 1055 would say it hit the spot. A mixture of agave nectar, feta cheese, grapes, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes approximately <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is great. Try <a href="https://spoonacular.com/recipes/quinoa-salad-with-kale-watermelon-grapes-and-feta-cheese-530083">Quinoa Salad with Kale, Watermelon, Grapes and Feta Cheese</a>, <a href="https://spoonacular.com/recipes/bulgur-salad-with-grapes-and-feta-cheese-123272">Bulgur Salad With Grapes and Feta Cheese</a>, and <a href="https://spoonacular.com/recipes/couscous-and-spinach-salad-with-feta-cheese-and-grapes-19335">Couscous And Spinach Salad With Feta Cheese And Grapes</a> for similar recipes.`,
  cuisines: [ ],
  dishTypes: [
  "salad"
  ],
  diets: [
  "gluten free",
  "lacto ovo vegetarian"
  ],
  occasions: [ ],
  winePairing: { },
  instructions: "Rinse the chopped kale in warm water, gently rubbing the leaves to soften. Dry the leaves in a salad spinner or on a towel.In a large bowl, combine the kale, grapes and feta cheese.In a small bowl, whisk together the lemon juice, olive oil, agave nectar (or honey), salt and pepper.Pour the dressing over the salad and toss to coat. Serve.",
  analyzedInstructions: [
  {
  name: "",
  steps: [
  {
  number: 1,
  step: "Rinse the chopped kale in warm water, gently rubbing the leaves to soften. Dry the leaves in a salad spinner or on a towel.In a large bowl, combine the kale, grapes and feta cheese.In a small bowl, whisk together the lemon juice, olive oil, agave nectar (or honey), salt and pepper.",
  ingredients: [
  {
  id: 1102047,
  name: "salt and pepper",
  image: "salt-and-pepper.jpg"
  },
  {
  id: 19912,
  name: "agave",
  image: "agave.png"
  },
  {
  id: 1019,
  name: "feta cheese",
  image: "feta.png"
  },
  {
  id: 9152,
  name: "lemon juice",
  image: "lemon-juice.jpg"
  },
  {
  id: 4053,
  name: "olive oil",
  image: "olive-oil.jpg"
  },
  {
  id: 9132,
  name: "grapes",
  image: "red-grapes.jpg"
  },
  {
  id: 11233,
  name: "kale",
  image: "kale.jpg"
  }
  ],
  equipment: [
  {
  id: 404792,
  name: "salad spinner",
  image: "salad-spinner.jpg"
  },
  {
  id: 404661,
  name: "whisk",
  image: "whisk.png"
  },
  {
  id: 404783,
  name: "bowl",
  image: "bowl.jpg"
  }
  ]
  },
  {
  number: 2,
  step: "Pour the dressing over the salad and toss to coat.",
  ingredients: [ ],
  equipment: [ ]
  },
  {
  number: 3,
  step: "Serve.",
  ingredients: [ ],
  equipment: [ ]
  }
  ]
  }
  ],
  originalId: null
  },
  {
  vegetarian: true,
  vegan: false,
  glutenFree: true,
  dairyFree: false,
  veryHealthy: true,
  cheap: false,
  veryPopular: true,
  sustainable: false,
  weightWatcherSmartPoints: 4,
  gaps: "no",
  lowFodmap: false,
  preparationMinutes: 15,
  cookingMinutes: 0,
  aggregateLikes: 491,
  spoonacularScore: 100,
  healthScore: 82,
  creditsText: "Recipe Girl",
  sourceName: "Recipe Girl",
  pricePerServing: 70.4,
  extendedIngredients: [
  {
  id: 2048,
  aisle: "Oil, Vinegar, Salad Dressing",
  image: "apple-cider-vinegar.jpg",
  consistency: "liquid",
  name: "apple cider vinegar",
  original: "1 1/2 tablespoons apple cider vinegar",
  originalString: "1 1/2 tablespoons apple cider vinegar",
  originalName: "apple cider vinegar",
  amount: 1.5,
  unit: "tablespoons",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 1.5,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  },
  metric: {
  amount: 1.5,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  }
  }
  },
  {
  id: 1004,
  aisle: "Cheese",
  image: "blue-cheese.png",
  consistency: "solid",
  name: "blue cheese",
  original: "1/4 cup crumbled blue cheese",
  originalString: "1/4 cup crumbled blue cheese",
  originalName: "crumbled blue cheese",
  amount: 0.25,
  unit: "cup",
  meta: [
  "blue",
  "crumbled"
  ],
  metaInformation: [
  "blue",
  "crumbled"
  ],
  measures: {
  us: {
  amount: 0.25,
  unitShort: "cups",
  unitLong: "cups"
  },
  metric: {
  amount: 59.147,
  unitShort: "ml",
  unitLong: "milliliters"
  }
  }
  },
  {
  id: 11485,
  aisle: "Produce",
  image: "butternut-squash.jpg",
  consistency: "solid",
  name: "butternut squash",
  original: "1 cup roasted cubed butternut squash (see *Tips below)",
  originalString: "1 cup roasted cubed butternut squash (see *Tips below)",
  originalName: "roasted cubed butternut squash (see *Tips below)",
  amount: 1,
  unit: "cup",
  meta: [
  "cubed",
  "(see *Tips below)"
  ],
  metaInformation: [
  "cubed",
  "(see *Tips below)"
  ],
  measures: {
  us: {
  amount: 1,
  unitShort: "cup",
  unitLong: "cup"
  },
  metric: {
  amount: 236.588,
  unitShort: "ml",
  unitLong: "milliliters"
  }
  }
  },
  {
  id: 1002046,
  aisle: "Condiments",
  image: "dijon-mustard.jpg",
  consistency: "liquid",
  name: "dijon mustard",
  original: "1 teaspoon Dijon mustard",
  originalString: "1 teaspoon Dijon mustard",
  originalName: "Dijon mustard",
  amount: 1,
  unit: "teaspoon",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 1,
  unitShort: "tsp",
  unitLong: "teaspoon"
  },
  metric: {
  amount: 1,
  unitShort: "tsp",
  unitLong: "teaspoon"
  }
  }
  },
  {
  id: 19296,
  aisle: "Nut butters, Jams, and Honey",
  image: "honey.png",
  consistency: "liquid",
  name: "honey",
  original: "1 teaspoon honey",
  originalString: "1 teaspoon honey",
  originalName: "honey",
  amount: 1,
  unit: "teaspoon",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 1,
  unitShort: "tsp",
  unitLong: "teaspoon"
  },
  metric: {
  amount: 1,
  unitShort: "tsp",
  unitLong: "teaspoon"
  }
  }
  },
  {
  id: 11233,
  aisle: "Produce",
  image: "kale.jpg",
  consistency: "solid",
  name: "kale",
  original: "3 cups trimmed and thinly sliced kale (ribs removed)",
  originalString: "3 cups trimmed and thinly sliced kale (ribs removed)",
  originalName: "trimmed and thinly sliced kale (ribs removed)",
  amount: 3,
  unit: "cups",
  meta: [
  "trimmed",
  "thinly sliced",
  "(ribs removed)"
  ],
  metaInformation: [
  "trimmed",
  "thinly sliced",
  "(ribs removed)"
  ],
  measures: {
  us: {
  amount: 3,
  unitShort: "cups",
  unitLong: "cups"
  },
  metric: {
  amount: 709.764,
  unitShort: "ml",
  unitLong: "milliliters"
  }
  }
  },
  {
  id: 4053,
  aisle: "Oil, Vinegar, Salad Dressing",
  image: "olive-oil.jpg",
  consistency: "liquid",
  name: "olive oil",
  original: "2 tablespoons olive oil",
  originalString: "2 tablespoons olive oil",
  originalName: "olive oil",
  amount: 2,
  unit: "tablespoons",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  },
  metric: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  }
  }
  },
  {
  id: 9286,
  aisle: "Produce",
  image: "pomegranate-seeds.jpg",
  consistency: "solid",
  name: "pomegranate seeds",
  original: "1/4 cup pomegranate seeds",
  originalString: "1/4 cup pomegranate seeds",
  originalName: "pomegranate seeds",
  amount: 0.25,
  unit: "cup",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 0.25,
  unitShort: "cups",
  unitLong: "cups"
  },
  metric: {
  amount: 59.147,
  unitShort: "ml",
  unitLong: "milliliters"
  }
  }
  },
  {
  id: 1022068,
  aisle: "Oil, Vinegar, Salad Dressing",
  image: "red-wine-vinegar.jpg",
  consistency: "liquid",
  name: "red wine vinegar",
  original: "2 teaspoons red wine vinegar",
  originalString: "2 teaspoons red wine vinegar",
  originalName: "red wine vinegar",
  amount: 2,
  unit: "teaspoons",
  meta: [
  "red"
  ],
  metaInformation: [
  "red"
  ],
  measures: {
  us: {
  amount: 2,
  unitShort: "tsps",
  unitLong: "teaspoons"
  },
  metric: {
  amount: 2,
  unitShort: "tsps",
  unitLong: "teaspoons"
  }
  }
  }
  ],
  id: 620343,
  title: "Kale Salad with Butternut Squash, Blue Cheese & Honey-Cider Vinaigrette",
  readyInMinutes: 15,
  servings: 4,
  sourceUrl: "http://www.recipegirl.com/2014/11/19/kale-salad-with-butternut-squash/",
  image: "https://spoonacular.com/recipeImages/620343-556x370.jpg",
  imageType: "jpg",
  summary: `Kale Salad with Butternut Squash, Blue Cheese & Honey-Cider Vinaigrette might be just the side dish you are searching for. This recipe serves 4 and costs 70 cents per serving. One serving contains <b>148 calories</b>, <b>5g of protein</b>, and <b>10g of fat</b>. A mixture of wine vinegar, olive oil, dijon mustard, and a handful of other ingredients are all it takes to make this recipe so tasty. It is a good option if you're following a <b>gluten free, primal, and vegetarian</b> diet. 491 person have made this recipe and would make it again. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is great. Try <a href="https://spoonacular.com/recipes/cider-roasted-squash-kale-salad-with-apple-cider-vinaigrette-619773">Cider-Roasted Squash & Kale Salad with Apple Cider Vinaigrette</a>, <a href="https://spoonacular.com/recipes/orzo-and-butternut-squash-skillet-with-kale-and-blue-cheese-620356">Orzo and Butternut Squash Skillet with Kale and Blue Cheese</a>, and <a href="https://spoonacular.com/recipes/roasted-butternut-squash-salad-with-warm-cider-vinaigrette-507606">Roasted Butternut Squash Salad with Warm Cider Vinaigrette</a> for similar recipes.`,
  cuisines: [ ],
  dishTypes: [
  "salad"
  ],
  diets: [
  "gluten free",
  "lacto ovo vegetarian",
  "primal"
  ],
  occasions: [ ],
  winePairing: { },
  instructions: "1. Make the vinaigrette: Combine all of the vinaigrette ingredients in a jar, seal with a lid and shake to combine. Set aside.2. Make the salad: In a large bowl, toss together the kale, squash and blue cheese. Toss with the vinaigrette. Divide the salad among serving bowls and sprinkle with pomegranate seeds before serving.",
  analyzedInstructions: [
  {
  name: "Make the vinaigrette",
  steps: [
  {
  number: 1,
  step: "Combine all of the vinaigrette ingredients in a jar, seal with a lid and shake to combine. Set aside.",
  ingredients: [ ],
  equipment: [ ]
  },
  {
  number: 2,
  step: "Make the salad: In a large bowl, toss together the kale, squash and blue cheese. Toss with the vinaigrette. Divide the salad among serving bowls and sprinkle with pomegranate seeds before serving.",
  ingredients: [
  {
  id: 9286,
  name: "pomegranate seeds",
  image: "pomegranate-seeds.jpg"
  },
  {
  id: 1004,
  name: "blue cheese",
  image: "blue-cheese.png"
  },
  {
  id: 10011485,
  name: "squash",
  image: "butternut-squash.jpg"
  },
  {
  id: 11233,
  name: "kale",
  image: "kale.jpg"
  }
  ],
  equipment: [
  {
  id: 404783,
  name: "bowl",
  image: "bowl.jpg"
  }
  ]
  }
  ]
  }
  ],
  originalId: null
  },
  {
  vegetarian: true,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: true,
  cheap: false,
  veryPopular: true,
  sustainable: false,
  weightWatcherSmartPoints: 12,
  gaps: "no",
  lowFodmap: false,
  preparationMinutes: 10,
  cookingMinutes: 15,
  aggregateLikes: 6680,
  spoonacularScore: 100,
  healthScore: 100,
  creditsText: "Two Peas and Their Pod",
  sourceName: "Two Peas and Their Pod",
  pricePerServing: 222.34,
  extendedIngredients: [
  {
  id: 11215,
  aisle: "Produce",
  image: "garlic.png",
  consistency: "solid",
  name: "garlic",
  original: "2 cloves garlic, minced",
  originalString: "2 cloves garlic, minced",
  originalName: "garlic, minced",
  amount: 2,
  unit: "cloves",
  meta: [
  "minced"
  ],
  metaInformation: [
  "minced"
  ],
  measures: {
  us: {
  amount: 2,
  unitShort: "cloves",
  unitLong: "cloves"
  },
  metric: {
  amount: 2,
  unitShort: "cloves",
  unitLong: "cloves"
  }
  }
  },
  {
  id: 1159,
  aisle: "Cheese",
  image: "goat-cheese.jpg",
  consistency: "solid",
  name: "goat cheese",
  original: "5 ounces goat cheese",
  originalString: "5 ounces goat cheese",
  originalName: "goat cheese",
  amount: 5,
  unit: "ounces",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 5,
  unitShort: "oz",
  unitLong: "ounces"
  },
  metric: {
  amount: 141.748,
  unitShort: "g",
  unitLong: "grams"
  }
  }
  },
  {
  id: 9152,
  aisle: "Produce",
  image: "lemon-juice.jpg",
  consistency: "liquid",
  name: "juice of lemon",
  original: "Juice of 1 large lemon",
  originalString: "Juice of 1 large lemon",
  originalName: "Juice of lemon",
  amount: 1,
  unit: "null",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 1,
  unitShort: "null",
  unitLong: "null"
  },
  metric: {
  amount: 1,
  unitShort: "null",
  unitLong: "null"
  }
  }
  },
  {
  id: 11233,
  aisle: "Produce",
  image: "kale.jpg",
  consistency: "solid",
  name: "kale",
  original: "1 small bunch kale (about 5 cups), coarsely chopped, stems removed",
  originalString: "1 small bunch kale (about 5 cups), coarsely chopped, stems removed",
  originalName: "small bunch kale (about , coarsely chopped, stems removed",
  amount: 5,
  unit: "cups",
  meta: [
  "coarsely chopped"
  ],
  metaInformation: [
  "coarsely chopped"
  ],
  measures: {
  us: {
  amount: 5,
  unitShort: "cups",
  unitLong: "cups"
  },
  metric: {
  amount: 1.183,
  unitShort: "l",
  unitLong: "liters"
  }
  }
  },
  {
  id: 9156,
  aisle: "Produce",
  image: "zest-lemon.jpg",
  consistency: "solid",
  name: "lemon zest",
  original: "Zest of 1 large lemon",
  originalString: "Zest of 1 large lemon",
  originalName: "Zest of lemon",
  amount: 1,
  unit: "large",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 1,
  unitShort: "large",
  unitLong: "large"
  },
  metric: {
  amount: 1,
  unitShort: "large",
  unitLong: "large"
  }
  }
  },
  {
  id: 4053,
  aisle: "Oil, Vinegar, Salad Dressing",
  image: "olive-oil.jpg",
  consistency: "liquid",
  name: "olive oil",
  original: "1 tablespoon olive oil",
  originalString: "1 tablespoon olive oil",
  originalName: "olive oil",
  amount: 1,
  unit: "tablespoon",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 1,
  unitShort: "Tbsp",
  unitLong: "Tbsp"
  },
  metric: {
  amount: 1,
  unitShort: "Tbsp",
  unitLong: "Tbsp"
  }
  }
  },
  {
  id: 1032009,
  aisle: "Spices and Seasonings",
  image: "red-pepper-flakes.jpg",
  consistency: "solid",
  name: "red pepper flakes",
  original: "Dash of crushed red pepper flakes",
  originalString: "Dash of crushed red pepper flakes",
  originalName: "crushed red pepper flakes",
  amount: 1,
  unit: "Dash",
  meta: [
  "red",
  "crushed"
  ],
  metaInformation: [
  "red",
  "crushed"
  ],
  measures: {
  us: {
  amount: 1,
  unitShort: "Dash",
  unitLong: "Dash"
  },
  metric: {
  amount: 1,
  unitShort: "Dash",
  unitLong: "Dash"
  }
  }
  },
  {
  id: 1102047,
  aisle: "Spices and Seasonings",
  image: "salt-and-pepper.jpg",
  consistency: "solid",
  name: "salt and pepper",
  original: "Salt and black pepper, to taste",
  originalString: "Salt and black pepper, to taste",
  originalName: "Salt and black pepper, to taste",
  amount: 4,
  unit: "servings",
  meta: [
  "black",
  "to taste"
  ],
  metaInformation: [
  "black",
  "to taste"
  ],
  measures: {
  us: {
  amount: 4,
  unitShort: "servings",
  unitLong: "servings"
  },
  metric: {
  amount: 4,
  unitShort: "servings",
  unitLong: "servings"
  }
  }
  },
  {
  id: 11677,
  aisle: "Produce",
  image: "shallots.jpg",
  consistency: "solid",
  name: "shallot",
  original: "1 medium shallot, diced",
  originalString: "1 medium shallot, diced",
  originalName: "shallot, diced",
  amount: 1,
  unit: "medium",
  meta: [
  "diced"
  ],
  metaInformation: [
  "diced"
  ],
  measures: {
  us: {
  amount: 1,
  unitShort: "medium",
  unitLong: "medium"
  },
  metric: {
  amount: 1,
  unitShort: "medium",
  unitLong: "medium"
  }
  }
  },
  {
  id: 20124,
  aisle: "Pasta and Rice",
  image: "whole-wheat-spaghetti.jpg",
  consistency: "solid",
  name: "whole wheat pasta",
  original: "12 ounces pasta (we used DeLallo's Organic Whole Wheat Farfalle)",
  originalString: "12 ounces pasta (we used DeLallo's Organic Whole Wheat Farfalle)",
  originalName: "pasta (we used DeLallo's Organic Whole Wheat Farfalle)",
  amount: 12,
  unit: "ounces",
  meta: [
  "whole wheat",
  "organic",
  "(we used DeLallo's Farfalle)"
  ],
  metaInformation: [
  "whole wheat",
  "organic",
  "(we used DeLallo's Farfalle)"
  ],
  measures: {
  us: {
  amount: 12,
  unitShort: "oz",
  unitLong: "ounces"
  },
  metric: {
  amount: 340.194,
  unitShort: "g",
  unitLong: "grams"
  }
  }
  }
  ],
  id: 547774,
  title: "Goat Cheese Lemon Pasta with Kale",
  readyInMinutes: 25,
  servings: 4,
  sourceUrl: "http://www.twopeasandtheirpod.com/goat-cheese-lemon-pasta-with-kale/",
  image: "https://spoonacular.com/recipeImages/547774-556x370.jpg",
  imageType: "jpg",
  summary: `Goat Cheese Lemon Pasta with Kale might be just the main course you are searching for. This vegetarian recipe serves 4 and costs <b>$2.27 per serving</b>. One serving contains <b>471 calories</b>, <b>23g of protein</b>, and <b>13g of fat</b>. This recipe is liked by 6680 foodies and cooks. From preparation to the plate, this recipe takes approximately <b>25 minutes</b>. Head to the store and pick up garlic, pasta, juice of lemon, and a few other things to make it today. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is amazing. Try <a href="https://spoonacular.com/recipes/weeknight-kale-spinach-and-goat-cheese-pasta-572201">Weeknight Kale, Spinach and Goat Cheese Pasta</a>, <a href="https://spoonacular.com/recipes/pasta-with-goat-cheese-radicchio-kale-and-pine-nuts-15271">Pasta With Goat Cheese, Radicchio, Kale And Pine Nuts</a>, and <a href="https://spoonacular.com/recipes/pasta-with-goat-cheese-lemon-and-asparagus-38059">Pasta With Goat Cheese, Lemon, And Asparagus</a> for similar recipes.`,
  cuisines: [ ],
  dishTypes: [
  "lunch",
  "main course",
  "main dish",
  "dinner"
  ],
  diets: [
  "lacto ovo vegetarian"
  ],
  occasions: [ ],
  winePairing: {
  pairedWines: [ ],
  pairingText: "No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.",
  productMatches: [ ]
  },
  instructions: "1. Bring a large pot of water to boil. Salt the water and cook pasta according to package directions. 2. In a large skillet, heat the olive oil over medium-high heat. Add the shallot and garlic. Cook until tender, about 4-5 minutes. Add a dash of crushed red pepper flakes. Stir in the chopped kale. Stir and add the lemon zest and lemon juice. Cook until kale leaves are wilted and tender. 3. Carefully drain the pasta. Return to pot. Crumble the goat cheese over the hot pasta and stir until creamy. Add the kale/lemon mixture. Season with salt and black pepper, to taste. Serve immediately.",
  analyzedInstructions: [
  {
  name: "",
  steps: [
  {
  number: 1,
  step: "Bring a large pot of water to boil. Salt the water and cook pasta according to package directions.",
  ingredients: [
  {
  id: 2047,
  name: "salt",
  image: "salt.jpg"
  }
  ],
  equipment: [
  {
  id: 404752,
  name: "pot",
  image: "stock-pot.jpg"
  }
  ]
  },
  {
  number: 2,
  step: "In a large skillet, heat the olive oil over medium-high heat.",
  ingredients: [
  {
  id: 4053,
  name: "olive oil",
  image: "olive-oil.jpg"
  }
  ],
  equipment: [
  {
  id: 404645,
  name: "frying pan",
  image: "pan.png"
  }
  ]
  },
  {
  number: 3,
  step: "Add the shallot and garlic. Cook until tender, about 4-5 minutes.",
  ingredients: [
  {
  id: 11677,
  name: "shallot",
  image: "shallots.jpg"
  },
  {
  id: 11215,
  name: "garlic",
  image: "garlic.png"
  }
  ],
  equipment: [ ],
  length: {
  number: 5,
  unit: "minutes"
  }
  },
  {
  number: 4,
  step: "Add a dash of crushed red pepper flakes. Stir in the chopped kale. Stir and add the lemon zest and lemon juice. Cook until kale leaves are wilted and tender.",
  ingredients: [
  {
  id: 1032009,
  name: "red pepper flakes",
  image: "red-pepper-flakes.jpg"
  },
  {
  id: 9152,
  name: "lemon juice",
  image: "lemon-juice.jpg"
  },
  {
  id: 9156,
  name: "lemon zest",
  image: "zest-lemon.jpg"
  },
  {
  id: 11233,
  name: "kale",
  image: "kale.jpg"
  }
  ],
  equipment: [ ]
  },
  {
  number: 5,
  step: "Carefully drain the pasta. Return to pot. Crumble the goat cheese over the hot pasta and stir until creamy.",
  ingredients: [
  {
  id: 1159,
  name: "goat cheese",
  image: "goat-cheese.jpg"
  }
  ],
  equipment: [
  {
  id: 404752,
  name: "pot",
  image: "stock-pot.jpg"
  }
  ]
  },
  {
  number: 6,
  step: "Add the kale/lemon mixture. Season with salt and black pepper, to taste.",
  ingredients: [
  {
  id: 1102047,
  name: "salt and pepper",
  image: "salt-and-pepper.jpg"
  },
  {
  id: 11233,
  name: "kale",
  image: "kale.jpg"
  }
  ],
  equipment: [ ]
  },
  {
  number: 7,
  step: "Serve immediately.",
  ingredients: [ ],
  equipment: [ ]
  }
  ]
  }
  ],
  originalId: null
  },
  {
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: true,
  cheap: false,
  veryPopular: true,
  sustainable: false,
  weightWatcherSmartPoints: 12,
  gaps: "no",
  lowFodmap: false,
  aggregateLikes: 4867,
  spoonacularScore: 100,
  healthScore: 97,
  creditsText: "Joanne Eats Well with Others",
  sourceName: "Joanne Eats Well with Others",
  pricePerServing: 173.53,
  extendedIngredients: [
  {
  id: 2044,
  aisle: "Produce;Spices and Seasonings",
  image: "basil.jpg",
  consistency: "solid",
  name: "fresh basil",
  original: "1 packed cup fresh basil, thinly sliced",
  originalString: "1 packed cup fresh basil, thinly sliced",
  originalName: "packed cup fresh basil, thinly sliced",
  amount: 1,
  unit: "cup",
  meta: [
  "fresh",
  "packed",
  "thinly sliced"
  ],
  metaInformation: [
  "fresh",
  "packed",
  "thinly sliced"
  ],
  measures: {
  us: {
  amount: 1,
  unitShort: "cup",
  unitLong: "cup"
  },
  metric: {
  amount: 236.588,
  unitShort: "ml",
  unitLong: "milliliters"
  }
  }
  },
  {
  id: 1159,
  aisle: "Cheese",
  image: "goat-cheese.jpg",
  consistency: "solid",
  name: "goat cheese",
  original: "4 oz goat cheese",
  originalString: "4 oz goat cheese",
  originalName: "goat cheese",
  amount: 4,
  unit: "oz",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 4,
  unitShort: "oz",
  unitLong: "ounces"
  },
  metric: {
  amount: 113.398,
  unitShort: "g",
  unitLong: "grams"
  }
  }
  },
  {
  id: 10311643,
  aisle: "Produce",
  image: "kabocha.jpg",
  consistency: "solid",
  name: "kabocha squash",
  original: "1 kabocha squash, seeded and cut into 3/4-inch cubes",
  originalString: "1 kabocha squash, seeded and cut into 3/4-inch cubes",
  originalName: "kabocha squash, seeded and cut into 3/4-inch cubes",
  amount: 1,
  unit: "",
  meta: [
  "seeded",
  "cut into 3/4-inch cubes"
  ],
  metaInformation: [
  "seeded",
  "cut into 3/4-inch cubes"
  ],
  measures: {
  us: {
  amount: 1,
  unitShort: "",
  unitLong: ""
  },
  metric: {
  amount: 1,
  unitShort: "",
  unitLong: ""
  }
  }
  },
  {
  id: 1082047,
  aisle: "Spices and Seasonings",
  image: "salt.jpg",
  consistency: "solid",
  name: "kosher salt",
  original: "kosher salt and freshly ground black pepper",
  originalString: "kosher salt and freshly ground black pepper",
  originalName: "kosher salt and freshly ground black pepper",
  amount: 6,
  unit: "servings",
  meta: [
  "black",
  "freshly ground"
  ],
  metaInformation: [
  "black",
  "freshly ground"
  ],
  measures: {
  us: {
  amount: 6,
  unitShort: "servings",
  unitLong: "servings"
  },
  metric: {
  amount: 6,
  unitShort: "servings",
  unitLong: "servings"
  }
  }
  },
  {
  id: 10011233,
  aisle: "Produce",
  image: "lacinato-kale.jpg",
  consistency: "solid",
  name: "lacinato kale",
  original: "1 bunch lacinato kale, leaves removed from stems and torn into strips",
  originalString: "1 bunch lacinato kale, leaves removed from stems and torn into strips",
  originalName: "lacinato kale, leaves removed from stems and torn into strips",
  amount: 1,
  unit: "bunch",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 1,
  unitShort: "bunch",
  unitLong: "bunch"
  },
  metric: {
  amount: 1,
  unitShort: "bunch",
  unitLong: "bunch"
  }
  }
  },
  {
  id: 4053,
  aisle: "Oil, Vinegar, Salad Dressing",
  image: "olive-oil.jpg",
  consistency: "liquid",
  name: "olive oil",
  original: "2 tbsp olive oil, for drizzling",
  originalString: "2 tbsp olive oil, for drizzling",
  originalName: "olive oil, for drizzling",
  amount: 2,
  unit: "tbsp",
  meta: [
  "for drizzling"
  ],
  metaInformation: [
  "for drizzling"
  ],
  measures: {
  us: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  },
  metric: {
  amount: 2,
  unitShort: "Tbsps",
  unitLong: "Tbsps"
  }
  }
  },
  {
  id: 11282,
  aisle: "Produce",
  image: "brown-onion.png",
  consistency: "solid",
  name: "onion",
  original: "1 onion, cut into 1/2-inch pieces",
  originalString: "1 onion, cut into 1/2-inch pieces",
  originalName: "onion, cut into 1/2-inch pieces",
  amount: 1,
  unit: "",
  meta: [
  "cut into 1/2-inch pieces"
  ],
  metaInformation: [
  "cut into 1/2-inch pieces"
  ],
  measures: {
  us: {
  amount: 1,
  unitShort: "",
  unitLong: ""
  },
  metric: {
  amount: 1,
  unitShort: "",
  unitLong: ""
  }
  }
  },
  {
  id: 1033,
  aisle: "Cheese",
  image: "parmesan.jpg",
  consistency: "solid",
  name: "parmesan cheese",
  original: "1/3 cup grated Parmesan cheese",
  originalString: "1/3 cup grated Parmesan cheese",
  originalName: "grated Parmesan cheese",
  amount: 0.3333333333333333,
  unit: "cup",
  meta: [
  "grated"
  ],
  metaInformation: [
  "grated"
  ],
  measures: {
  us: {
  amount: 0.333,
  unitShort: "cups",
  unitLong: "cups"
  },
  metric: {
  amount: 78.863,
  unitShort: "ml",
  unitLong: "milliliters"
  }
  }
  },
  {
  id: 11120420,
  aisle: "Pasta and Rice",
  image: "penne-pasta.jpg",
  consistency: "solid",
  name: "penne",
  original: "1 lb penne",
  originalString: "1 lb penne",
  originalName: "penne",
  amount: 1,
  unit: "lb",
  meta: [ ],
  metaInformation: [ ],
  measures: {
  us: {
  amount: 1,
  unitShort: "lb",
  unitLong: "pound"
  },
  metric: {
  amount: 453.592,
  unitShort: "g",
  unitLong: "grams"
  }
  }
  }
  ],
  id: 562999,
  title: "Penne with Butternut Squash, Kale, and Goat Cheese {12 Weeks of Winter Squash}",
  readyInMinutes: 45,
  servings: 6,
  sourceUrl: "http://joanne-eatswellwithothers.com/2013/11/penne-with-butternut-squash-kale-and-goat-cheese-12-weeks-of-winter-squash.html",
  image: "https://spoonacular.com/recipeImages/562999-556x370.jpg",
  imageType: "jpg",
  summary: `Penne with Butternut Squash, Kale, and Goat Cheese {12 Weeks of Winter Squash} might be just the main course you are searching for. One serving contains <b>475 calories</b>, <b>19g of protein</b>, and <b>12g of fat</b>. For <b>$1.74 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. Plenty of people made this recipe, and 4867 would say it hit the spot. It will be a hit at your <b>Winter</b> event. If you have basil, kosher salt and pepper, kabocha squash, and a few other ingredients on hand, you can make it. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is outstanding. Try <a href="https://spoonacular.com/recipes/penne-with-butternut-squash-and-goat-cheese-382104">Penne with Butternut Squash and Goat Cheese</a>, <a href="https://spoonacular.com/recipes/skillet-phyllo-pie-with-butternut-squash-kale-and-goat-cheese-898487">Skillet Phyllo Pie With Butternut Squash, Kale, and Goat Cheese</a>, and <a href="https://spoonacular.com/recipes/thick-bacon-kale-and-goat-cheese-butternut-squash-fettucine-622155">Thick Bacon, Kale and Goat Cheese Butternut Squash “Fettucine”</a> for similar recipes.`,
  cuisines: [ ],
  dishTypes: [
  "lunch",
  "main course",
  "main dish",
  "dinner"
  ],
  diets: [ ],
  occasions: [
  "winter"
  ],
  winePairing: {
  pairedWines: [ ],
  pairingText: "",
  productMatches: [ ]
  },
  instructions: "Preheat the oven to 400F.Line a baking sheet with parchment paper. Spread the kabocha cubes and onion evenly over the tray. Drizzle with olive oil and sprinkle with salt and pepper to season. Roast for 30 minutes or until fork tender. Remove from the oven and set aside.Bring a large pot of salted water to a boil. Add the pasta and cook according to package directions, stirring in the kale in the last 2 minutes of cooking. Drain, reserving 2 cups of pasta water. Toss the pasta and kale with the kabocha squash, onions, goat cheese, and one cup of the pasta water. Stir in the basil and parmesan cheese, adding more water if necessary to make a sauce. Season to taste with salt and pepper.",
  analyzedInstructions: [
  {
  name: "",
  steps: [
  {
  number: 1,
  step: "Preheat the oven to 400F.Line a baking sheet with parchment paper.",
  ingredients: [ ],
  equipment: [
  {
  id: 404770,
  name: "baking paper",
  image: "baking-paper.jpg"
  },
  {
  id: 404727,
  name: "baking sheet",
  image: "baking-sheet.jpg"
  },
  {
  id: 404784,
  name: "oven",
  image: "oven.jpg",
  temperature: {
  number: 400,
  unit: "Fahrenheit"
  }
  }
  ]
  },
  {
  number: 2,
  step: "Spread the kabocha cubes and onion evenly over the tray.",
  ingredients: [
  {
  id: 10311643,
  name: "kabocha squash",
  image: "kabocha.jpg"
  },
  {
  id: 11282,
  name: "onion",
  image: "brown-onion.png"
  }
  ],
  equipment: [ ]
  },
  {
  number: 3,
  step: "Drizzle with olive oil and sprinkle with salt and pepper to season. Roast for 30 minutes or until fork tender.",
  ingredients: [
  {
  id: 1102047,
  name: "salt and pepper",
  image: "salt-and-pepper.jpg"
  },
  {
  id: 4053,
  name: "olive oil",
  image: "olive-oil.jpg"
  }
  ],
  equipment: [ ],
  length: {
  number: 30,
  unit: "minutes"
  }
  },
  {
  number: 4,
  step: "Remove from the oven and set aside.Bring a large pot of salted water to a boil.",
  ingredients: [ ],
  equipment: [
  {
  id: 404784,
  name: "oven",
  image: "oven.jpg"
  },
  {
  id: 404752,
  name: "pot",
  image: "stock-pot.jpg"
  }
  ]
  },
  {
  number: 5,
  step: "Add the pasta and cook according to package directions, stirring in the kale in the last 2 minutes of cooking.",
  ingredients: [
  {
  id: 20420,
  name: "pasta",
  image: "fusilli.jpg"
  },
  {
  id: 11233,
  name: "kale",
  image: "kale.jpg"
  }
  ],
  equipment: [ ],
  length: {
  number: 2,
  unit: "minutes"
  }
  },
  {
  number: 6,
  step: "Drain, reserving 2 cups of pasta water. Toss the pasta and kale with the kabocha squash, onions, goat cheese, and one cup of the pasta water. Stir in the basil and parmesan cheese, adding more water if necessary to make a sauce. Season to taste with salt and pepper.",
  ingredients: [
  {
  id: 1033,
  name: "parmesan",
  image: "parmesan.jpg"
  },
  {
  id: 1102047,
  name: "salt and pepper",
  image: "salt-and-pepper.jpg"
  },
  {
  id: 10311643,
  name: "kabocha squash",
  image: "kabocha.jpg"
  },
  {
  id: 1159,
  name: "goat cheese",
  image: "goat-cheese.jpg"
  },
  {
  id: 11282,
  name: "onion",
  image: "brown-onion.png"
  },
  {
  id: 2044,
  name: "basil",
  image: "basil.jpg"
  },
  {
  id: 20420,
  name: "pasta",
  image: "fusilli.jpg"
  },
  {
  id: 11233,
  name: "kale",
  image: "kale.jpg"
  }
  ],
  equipment: [ ]
  }
  ]
  }
  ],
  originalId: null
  }
  ]
  console.log(bulkInfo[0].vegetarian)

  export default function getBulkInfo() {
    return bulkInfo;
  }