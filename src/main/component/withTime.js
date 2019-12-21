import React, {Component} from 'react';
import Timecode from 'react-timecode';


const withTime = (WrapperComponent) => {
    class WithTime extends Component {

        constructor(props) {
            super(props);
            this.state = {
                time: "Hi",
                curTime : new Date().toLocaleString()
            }
        }

        render() {
            return (
                <WrapperComponent currentTime={this.state.curTime} {...this.props}/>
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

    return WithTime;
}

export default withTime;

