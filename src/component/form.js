import React from 'react';

export default class nameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''}
    }
    

    handleChange(event) {
        this.setState({value: event.target.value});
        
    }

    handleSubmit(event){
        console.log(this.state.value);
        alert('Welcome to ReacrJS: ' + this.state.value);
        event.preventDefault()
        
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
                Tên:
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}