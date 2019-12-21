import React, {Component} from 'react';
import '../../style/header.css';
import './a.jpg';
import withTime from "../component/withTime";




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
                <h2> {this.props.message}</h2>
                {this.state.curTime}
                {/*<img src={require('./a.jpg')} alt="Girl in a jacket" className="image"></img>*/}
            </div>
        );
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime : new Date().toLocaleString()
            })
        },1000)
    }
}

export default withTime(Header);
