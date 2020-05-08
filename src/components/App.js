import React from 'react';
import logo from './logo.svg';
import './App.css';

import Show from './components/Pantries/Show';

const pantryList = [{
  id: 1,
  user_id: 1,
  name: 'banana',
  quantity: 3.432,
  unit: 'pieces',
  expiry: '2020-05-08'
}];

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
