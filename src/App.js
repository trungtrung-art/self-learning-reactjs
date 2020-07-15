import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItems from './component/todoitems'

class App extends React.Component {
	constructor() {
		super();
		this.todoItems=[
			{ title : "Đi chơi gái", isComplete: true},
			{ title : "Đi xét nghiệm", isComplete: true},
			{ title : "Đi mua hòm"}
		];
	}

	render() {
		// Cách dùng điều kiện if , else để xét điều kiện trả ra 
		if(this.todoItems.length > 0){
			return ( 
				<div className = "App">
					{
						this.todoItems.map((items, index) => 
						<TodoItems key={index} item={items} />
						)
					}
				</div>
			)
		}
		else {
			return ( 
				<div className = "App">
					Nothing
				</div>
			)
		}
		// Cách dùng or hoặc and để xét điều kiện trả ra 
		// return <div className = "App">
		// 			{this.todoItems.length > 0 && this.todoItems.map((items, index) => 
		// 				<TodoItems key={index} item={items} />
		// 				)
		// 			}
		// 			{this.todoItems.length === 0 && "Nothing"}
		// 		</div>
		
	}
	
}
export default App;