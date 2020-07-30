import React from 'react';
import './App.css';
import TrafficLight from './component/TrafficLight'

class App extends React.Component {
	constructor() {
		super();
		
	}

	render() {
		return ( <div className = "App">
				<TrafficLight />

			</div>
		)
	}
	
}
export default App;