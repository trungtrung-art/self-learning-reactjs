import React from 'react';
import './TrafficLight.css'
import className from 'classnames'

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

export default class TrafficLight extends React.Component {
    constructor(){
        super();
        this.state = {
            currentColor : RED
        };
        
        setInterval(() => {
            // console.log(this.currentColor);
            this.setState({
                currentColor : this.getNextColor(this.state.currentColor)
            })
        },1000)
    }

    getNextColor(color){
        
        switch(color){
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    render(){
        const { currentColor } = this.state;
        // console.log("render...",currentColor);
        return (
            <div className="TrafficLight">
                <div className={className('buld','red',{ 
                    active : currentColor === RED
                    })} />
                <div className={className('buld','orange',{ 
                    active : currentColor === ORANGE
                    })} />
                <div className={className('buld','green',{ 
                    active : currentColor === GREEN
                    })} />
            </div>
        )
    }
}