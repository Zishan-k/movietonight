import React, {Component} from 'react';
import Child from '../../Child'

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message : "Hello Parent"
        }
        this.updateState = this.updateState.bind(this)
    }

    render() {
        return (
            <div>
               <Child handler={this.updateState}></Child>
            </div>
        );
    }

    updateState(name) {
        if (name != undefined) {
            alert(` ${this.state.message} from ${name}`)
        } else {
            alert("property not passed")
        }
    }
}

export default Button;
