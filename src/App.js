import React from 'react';
import './App.css';
import TodoItems from './component/todoitems';
import checkall from './images/down-arrow.svg';
import { node } from 'prop-types';




class App extends React.Component {
	constructor() {
		super();
		this.state = {
			newItems: "",
			todoItems: [
			{ id: 1,title : "Đi chơi gái", isComplete: false},
			{ id: 2, title : "Đi xét nghiệm", isComplete: false},
			{ id: 3,title : "Đi mua hòm", isComplete: false}
		]}
		this.inputElement = React.createRef();
		
	}

	componentDidMount(){
		this.inputElement.current.focus()
	}

	onItemClicked(index){
		console.log(index);
		const arrList = [...this.state.todoItems]
		arrList[index].isComplete = !arrList[index].isComplete
		this.setState((prevState) => (
			{
			...prevState,
			todoItems: arrList
		}))

	}

	onKeyUp(event){
		let text = event.target.value
		if(event.keyCode === 13){
			console.log(text);
			text = text.trim()
			if (!text){
				return;
			}
			this.setState({
				newItems: "",
				todoItems: [
					...this.state.todoItems,
					{ title: text, isComplete: false}
				]
			})
		}
	}

	deleteButton(id){
		// console.log(id);
		// let id = items.id
		let todoItems = this.state.todoItems.filter(items => items.id !== id)
		// console.log(todoItems);
		this.setState({todoItems})
		// console.log(id);
	}

	onChange(event){
		this.setState({
			newItems: event.target.value, //khi không enter thì nó sẽ lưu trữ text lên hàm newItems
		});
	}

	render() {
		// Cách dùng or hoặc and để xét điều kiện trả ra 
		const { todoItems , newItems} = this.state;
		return ( <div className = "App">
					<div className="Header">
						<img src={checkall} width={32} height={32} />
						<input 
						ref = {this.inputElement}
						placeholder="Nhập công việc cần làm vào đây ?" 
						onKeyUp={this.onKeyUp.bind(this)} 
						value = {newItems}
						onChange={this.onChange.bind(this)}/>
					</div>	
					{todoItems.length > 0 && todoItems.map((items, index) => 
						<TodoItems 
							key={index} 
							item={items}
							id = {items.id}
							onClick={this.onItemClicked.bind(this,index)}
							funcDel={this.deleteButton.bind(this,items.id)}/>
						)
					}
					{todoItems.length === 0 && "Nothing"}
				</div> )
	}
	
}
export default App;