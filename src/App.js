import React from 'react';
import './App.css';
import TodoItems from './component/todoitems';
import checkall from './images/down-arrow.svg';



class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoItems: [
			{ title : "Đi chơi gái", isComplete: false},
			{ title : "Đi xét nghiệm", isComplete: false},
			{ title : "Đi mua hòm", isComplete: false}
		]}
	}

	onItemClicked(index){
		const arrList = [...this.state.todoItems]
		arrList[index].isComplete = !arrList[index].isComplete
		this.setState((prevState) => (
			{
			...prevState,
			todoItems: arrList
		}))

	}

	render() {
		// Cách dùng or hoặc and để xét điều kiện trả ra 
		const { todoItems } = this.state;
		return ( <div className = "App">
					<div className="Header">
						<img src={checkall} width={32} height={32} />
						<input />
					</div>	
					{todoItems.length > 0 && todoItems.map((items, index) => 
						<TodoItems 
							key={index} 
							item={items} 
							onClick={this.onItemClicked.bind(this,index)}/>
						)
					}
					{todoItems.length === 0 && "Nothing"}
				</div> )
	}
	
}
export default App;