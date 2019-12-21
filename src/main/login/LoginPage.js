import React, {Component} from 'react';
import '../../style/Login.css';
import ErrorHandler from "../error_handler/ErrorHandler";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.inputRef = React.createRef()

    }
    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {


        return (
            <ErrorHandler>
            <form className="margin" onSubmit={this.onSubmitHandler}>
                <div>
                    <input type="text" placeholder="Enter Username" ref={this.inputRef} required value={this.state.username} onChange={this.changeUsername}/>
                </div>
                <div>
                    <input type="password" placeholder="Enter Password" required value={this.state.password} onChange={this.changePassword}/>
                </div>
                    <button type="submit">Submit</button> <button type="submit"> Signup</button>

            </form>
            </ErrorHandler>
        );
    }

    changeUsername = (event) => {
        this.setState({
                username: event.target.value
            }
        )
    }

    changePassword = (event) => {
        this.setState({
                password: event.target.value
            }
        )
    }

    onSubmitHandler = event => {
        alert(` ${this.state.username}  ${this.state.password}`)
        event.preventDefault()
    }
}

export default LoginPage;
