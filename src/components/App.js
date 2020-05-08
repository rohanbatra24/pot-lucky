import React from 'react';
import '../App.css';

// const pantryList = [{
//   id: 1,
//   user_id: 1,
//   name: 'banana',
//   quantity: 3.432,
//   unit: 'pieces',
//   expiry: '2020-05-08'
// }];

const state = {
  'pantryListItems': [{
      id: 1,
      user_id: 1,
      name: 'banana',
      quantity: 3.432,
      unit: 'pieces',
      expiry: '2020-05-08'
    },
    {
      id: 2,
      user_id: 1,
      name: 'sugar',
      quantity: 23.000,
      unit: 'ounces',
      expiry: '2020-05-08'
    },
    {
      id: 3,
      user_id: 1,
      name: 'turnip',
      quantity: 12.000,
      unit: 'pieces',
      expiry: '2020-05-08'
    },
    {
      id: 4,
      user_id: 2,
      name: 'lemon juice',
      quantity: 0.750,
      unit: 'cups',
      expiry: '2020-05-09'
    },
    {
      id: 5,
      user_id: 2,
      name: 'cinnamon',
      quantity: 1.950,
      unit: 'tablespoons',
      expiry: '2020-05-09'
    },
    {
      id: 6,
      user_id: 3,
      name: 'salt',
      quantity: 1.000,
      unit: 'pinch',
      expiry: '2020-05-09'
    }
  ]
};

/*

	Child components:
		1. Pantry list
		2. Recipe list
		3. Search
		4. Navigation bar

*/

function App() {

	return (
		<div className="App">

			<PantryList />
		</div>
	);
}

export default App;
