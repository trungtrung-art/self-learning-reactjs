import React from 'react';
import './App.css';
import Accordian from './component/Accordian'

export default function App(props){
	return(
		<div className="App">
			<Accordian 
				heading="Menu 1" 
				content="Menu 1-1" />
			<Accordian 
				heading="Menu 2" 
				content="Menu 2-1" />
		</div>
	)
}