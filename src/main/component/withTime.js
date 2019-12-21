import React, {Component} from 'react';
import Timecode from 'react-timecode';


const withTime = (WrapperComponent) => {
    class WithTime extends Component {

        constructor(props) {
            super(props);
            this.state = {
                time : "Hi"
            }
        }

        render() {
            return (
                <WrapperComponent currentTime="" {... this.props}/>
            );
        }



    }


    return WithTime;
}

export default withTime;

