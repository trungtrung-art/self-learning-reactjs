import React from 'react';
import './App.css';
import TodoItems from './component/todoitems';
import checkall from './images/down-arrow.svg';



class App extends React.Component {
	constructor() {
		super();
		this.state = {
			newItems: "",
			todoItems: [
			{ title : "Đi chơi gái", isComplete: false},
			{ title : "Đi xét nghiệm", isComplete: false},
			{ title : "Đi mua hòm", isComplete: false}
		]}
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
						placeholder="Nhập công việc cần làm vào đây ?" 
						onKeyUp={this.onKeyUp.bind(this)} 
						value = {newItems}
						onChange={this.onChange.bind(this)}/>
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