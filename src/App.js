import React from 'react';
import logo from './logo.svg';
import './App.css';

import Show from './components/Pantries/Show';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Pot Lucky
				</a>
			</header>
			<Show />
		</div>
	);
}

export default App;
