import React from 'react';
import './App.css';
import Accordian from './component/Accordian'

export default function App(props){
	return(
		<div className="App">
			<Accordian 
				heading="Menu 1" 
				>menu 1</Accordian>
			<Accordian 
				heading="Menu 2" 
				>menu 2</Accordian>
		</div>
	)
}