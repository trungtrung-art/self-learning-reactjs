import React from 'react';
import './Accordian.css'

export default class Accordian extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isCollapse: false
        }
    }

    onClick(){
        this.setState ({
            isCollapse: !this.state.isCollapse
        });
        console.log(this.state.isCollapse);
    }

    render(){
        const { heading,content } = this.props;
        const { isCollapse } = this.state;
        return (
            <div className="Collapse">
                <div className="Heading" onClick={this.onClick.bind(this)}>
                    <h2>{heading}</h2>
                </div>
                {isCollapse && <div className="Content">{content}</div>}
            </div>
        )
    }
}