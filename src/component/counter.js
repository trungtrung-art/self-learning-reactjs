import React from 'react';

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    sum(){
        this.setState({
            count: this.state.count + 1
        });
    }

    minus(){
        this.setState({
            count: this.state.count - 1
        });
    }
    render(){
        console.log("counter render");
        return(
            <div className="counter">
                <button onClick={this.minus.bind(this)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.sum.bind(this)}>+</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("counter did mount");
    }

    componentDidUpdate(){
        console.log("counter did update");
    }

    componentWillUnmount(){
        console.log("counter will unmount");
    }
}