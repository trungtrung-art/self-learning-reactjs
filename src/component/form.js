import React from 'react';
import './form.css'

export default class nameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            aaaa: "c"
        }
    }
    
    handleChange(event, aaa){
        this.setState({
            value: event.target.value, 
            aaaa: aaa
        });
    }
    
    FToC(value) {
        let kq = (value - 32) * 5/9
        let x = Math.round(kq)
        return x
    }

    CToF(value) {
        let kq = value * 9/5 +32
        let x = Math.round(kq)
        return x
    }


    render() {
        const {aaaa, value} = this.state
        return (
            <form>
            <label>
                Độ C:
                <input type="text" value={`${aaaa === "f" ? this.FToC(value) : value}`} onChange={(e)=> this.handleChange(e, 'c')} />
            </label> 
            <label>
                Độ F:
                <input type="text" value={`${aaaa === "c" ? this.CToF(value) : value}`} onChange={(e)=> this.handleChange(e, 'f')} />
            </label>
            </form>
        );
    }
}