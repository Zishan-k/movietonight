import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "../button/Button";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            isSignUpClicked: false
        }
        this.inputRef = React.createRef()
    }



    render() {
        const {username, password, email} = this.state
        return (

            <div className="header" >

                <form onSubmit={this.submitHandler} hidden={!this.state.isSignUpClicked}>
                    <div>
                        <input type="text" name="username" placeholder="Enter User" value={username} onChange={this.changeHandler}
                               required={true} minLength={5}/>
                        <input type="text" name="password" placeholder="Enter Password" value={password} onChange={this.changeHandler}
                               required={true} minLength={5}/>
                        <input type="text" name="email" placeholder="Enter Mail" value={email} onChange={this.changeHandler} required={true}
                               minLength={5}/>
                        <button type="submit">Submit</button>
                    </div>

                </form>


                    <form className="margin" onSubmit={this.onSubmitHandler} hidden={this.state.isSignUpClicked}>
                        <div>
                            <input type="text" name="username" placeholder="Enter Username" ref={this.inputRef} required
                                   value={this.state.username} onChange={this.changeUsername}/>
                            <input type="password" placeholder="Enter Password" required value={this.state.password}
                                   onChange={this.changePassword}/>
                            <button type="submit">Submit</button>
                            <button type="submit" onClick={this.hideMe}>SignUp</button>
                        </div>

                    </form>
            </div>


        );
    }


    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
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

    hideMe = () => {
        this.setState({
                isSignUpClicked: true
            }
        )
    }

}

export default SignUp;
