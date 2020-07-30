import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItems from './component/todoitems'
// import TrafficLight from './component/TrafficLight'

class App extends React.Component {
	constructor() {
		super();
		this.todoItems=[
			{ title : "Đi chơi gái", isComplete: true},
			{ title : "Đi xét nghiệm", isComplete: true},
			{ title : "Đi mua hòm", isComplete: true}
		];
	}

	onItemClicked(items){
		return (event) => {
			// console.log(items);
			const isComplete = items.isComplete;
			const { todoItems } = this.state;
			// tại dòng này có nghĩa là khi click vào bạn sẽ biết được nó thay đổi isCpmplete ở vị trí dòng nào 
			const index = todoItems.indexOf(items);
			this.setState({
				todoItems: [
					...todoItems.slice(0,index),
					{
						...items,
						isComplete: !isComplete
					},
					...todoItems.slice (index + 1)
				]
			})
		}
		
	}

	render() {
		// Cách dùng or hoặc and để xét điều kiện trả ra 
		const { todoItems } = this.state;
		return ( <div className = "App">
					{todoItems.length > 0 && todoItems.map((items, index) => 
						<TodoItems 
							key={index} 
							item={items} 
							onClick={this.onItemClicked(items)}/>
						)
					}
					{todoItems.length === 0 && "Nothing"}
				</div> )
	}
	
}
export default App;