import React from 'react';
import './App.css';
import NameForm from './component/form';



class App extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		
		return ( <div className = "App">
					<NameForm />
				</div> )
	}
	
}
export default App;