import React from 'react';
import './App.css';

default export class App extends Component {
	render() {
		return (
		<div>
			<h1>TASK</h1>
			{tasks.map(item => (
			<div key={item.id}>
				Task name:
				<strong onClick={() => { alert(item.content) }>
				{item.content}
				</strong>
			</div>
		))}
		</div>
	);
	}
}