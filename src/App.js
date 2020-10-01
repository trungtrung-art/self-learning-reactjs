import React from 'react';
import './App.css';
import Count from './component/counter.js'


function App (){
	return(
		<div className="App">
			<Count render={val => <h1>{val}</h1>}/>
		</div>
	)
}
export default App;