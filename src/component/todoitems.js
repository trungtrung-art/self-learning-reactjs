import React from 'react';
import './todoitems.css'

export default class TodoItems extends React.Component {
    render(){
        // console.log(this.props)
        let { item } = this.props;
        console.log(item)
        let className = 'todoList';
        if (item.isComplete){
            className += ' todoList-done';
        }
        return(
            <div className={className}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
