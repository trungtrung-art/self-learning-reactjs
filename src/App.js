import React from 'react';
import './App.css';
import Counter from './component/counter';


class App extends React.Component {
	constructor() {
		super();
		
	}

	

	render() {
		console.log("App render");
		return(
			<Counter/>
		)
	}

	componentDidUpdate(){
		console.log("App update");
	}
	
}
export default App;