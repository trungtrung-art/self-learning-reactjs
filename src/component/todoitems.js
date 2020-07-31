import React from 'react';
import './todoitems.css';
import className from 'classnames';

export default class TodoItems extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.onItemClick = this.onItemClick.bind(this)// tại dòng này có nghĩa là nó sẽ trả về this trong hàm onItemClick đấy
    // }
    // onItemClick(){
    //     console.log(this.props.item);// Ở đây chúng ta sẽ xảy ra lỗi nếu không có constructor phía bên trên vì nó không nhận được this nhận vào
    // }

    render(){
        // console.log(this.props)
        let { item , onClick} = this.props; // tạo item bằng this.props có nghĩa giá trị được truyền vào bên file App
        // console.log(item) 

        return(
            <div onClick={onClick} className={className('todoList',{'todoList-done' : item.isComplete})}>
                <p>{item.title}</p>
            </div>
        );
    }
}
