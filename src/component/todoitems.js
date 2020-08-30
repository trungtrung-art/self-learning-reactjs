import React from 'react';
import './todoitems.css';
import className from 'classnames';
import PropTypes from 'prop-types';
import check from '../images/circle.svg';
import checkdone from '../images/check-done.svg';
import close from '../images/close.svg'

export default class TodoItems extends React.Component {
    render(){
        // console.log(this.props)
        let { item , onClick , deLete} = this.props; // tạo item bằng this.props có nghĩa giá trị được truyền vào bên file App
        // console.log(item) 
        let url = check ;
        if (item.isComplete){
            url = checkdone;
        }

        return(
            <div className={className('todoList',{'todoList-done' : item.isComplete})}>
                <div className="checkAndText">
                    <img src={url} onClick={onClick}></img>
                    <p>{item.title}</p>
                </div>
                <img src ={close} id={item.id} onClick={this.props.funcDel}></img>
            </div>
        );
    }
}

// đây là khai báo proptype cho component
TodoItems.propTypes ={
    item: PropTypes.shape({
        isComplete: PropTypes.bool,
        title: PropTypes.string
    }),
    onClick: PropTypes.func
}
