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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Tên:
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this.event)} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}