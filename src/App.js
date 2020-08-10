import React from 'react';
import './App.css';
import nameForm from './component/form';



class App extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return ( <div className = "App">
					<nameForm/>
				</div> )
	}
	
}
export default App;