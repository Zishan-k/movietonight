import React, {Component} from 'react';
import '../../style/header.css';
import './a.jpg';
import withTime from "../component/withTime";
import LoginPage from "../login/LoginPage";
import SignUp from "../login/SignUp";




class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curTime : new Date().toLocaleString()
        }
    }


    headerMessage = () =>{
        console.log(this.props.message)
        return this.props.message;
    }

    render() {
        return (
            <div className="header">
                <span >
                <img src={require("./logo.png")} alt = "logo" width="250" height="100"/>
                </span>

                <span>
                <SignUp/>
                </span>
                {/*{this.props.currentTime}*/}
                {/*<img src={require('./a.jpg')} alt="Girl in a jacket" className="image"></img>*/}
            </div>
        );
    }
}

export default withTime(Header);
