import React from 'react';
import './updateTime.css';

export default class updateTime extends React.Component{
    constructor(){
        super()
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.state = {
            time : new Date().toLocaleTimeString(),
            date : new Date().toLocaleDateString('en-US',options)
        }
        this.tick()
    }
    tick(){
         setInterval(()=>{
            this.setState({
                time : new Date().toLocaleTimeString()
            })
         },1000)
    }
    render(){
        const {time,date} = this.state
        return (
            <div className="">
                <div className="clock">
                    <div className="time">
                        <div className="hours">{time}</div>
                        <div className="date">{date}</div>
                    </div>
                </div>
                
            </div>
        );
    }
}