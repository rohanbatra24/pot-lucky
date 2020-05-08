import React from 'react';
import logo from './logo.svg';
import './App.css';

import Show from './components/Pantries/Show';

function App() {
	const pantryList = [{
	  id: 1,
	  user_id: 1,
	  name: 'banana',
	  quantity: 3.432,
	  unit: 'pieces',
	  expiry: '2020-05-08'
	}];

	return (
		<div className="App">
			<header className="App-header">
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Potlucky
				</a>
			</header>
			<Show name={pantryList[0].name}/>
		</div>
	);
}

export default App;
