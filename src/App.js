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
		// const { todoItems } = this.state;÷
		// Cách dùng điều kiện if , else để xét điều kiện trả ra 
		// if(this.todoItems.length > 0){
		// 	return ( 
		// 		<div className = "App">
		// 			{
		// 				this.todoItems.map((items, index) => 
		// 				<TodoItems key={index} item={items} />
		// 				)
		// 			}
		// 		</div>
		// 	)
		// }
		// else {
		// 	return ( 
		// 		<div className = "App">
		// 			Nothing
		// 		</div>
		// 	)
		// }
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
		// Ví dụ cụ thể về State 
		// return ( <div className = "App">
		// 		<TrafficLight />

		// 	</div>
		// )
	}
	
}
export default App;