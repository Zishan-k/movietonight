import React, {Component} from 'react';
import '../../style/header.css';
import './a.jpg';
import withTime from "../component/withTime";
import SignUp from "../login/SignUp";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";


class Header extends Component {


    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            isSignUpClicked: false,
            curTime: new Date().toLocaleString()
        }
        this.inputRef = React.createRef()
    }


    headerMessage = () => {
        console.log(this.props.message)
        return this.props.message;
    }

    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">

                <Navbar.Brand href="#home">
                    Logo
                    {/*<img src={require("./logo.png")} alt = "logo" width="250" height="70"/>*/}

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Si-fi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline={true} onSubmit={this.submitHandler} hidden={!this.state.isSignUpClicked}>
                        <Form.Group controlId="signUpForm">

                            <FormControl type="text" name="username" placeholder="Enter Username"
                                         value={this.state.username} onChange={this.changeHandler}
                                         required={true} minLength={5} className="mr-sm-2"/>
                            <FormControl type="text" name="password" placeholder="Enter Password"
                                         value={this.state.password} onChange={this.changeHandler}
                                         required={true} minLength={5} className="mr-sm-2"/>
                            <FormControl type="text" name="email" placeholder="Enter Mail" value={this.state.email}
                                         onChange={this.changeHandler} required={true}
                                         minLength={5} className="mr-sm-2"/>
                            <Button variant="outline-success" onClick={this.hideMe}>SignUp</Button>
                        </Form.Group>
                    </Form>


                    <Form inline={true} onSubmit={this.onSubmitHandler} hidden={this.state.isSignUpClicked}>
                        <Form.Group controlId="signUpForm">
                            <FormControl type="text" name="username" placeholder="Enter Username" ref={this.inputRef}
                                         required
                                         value={this.state.username} onChange={this.changeUsername}
                                         className="mr-sm-2"/>
                            <FormControl type="password" placeholder="Enter Password" required
                                         value={this.state.password}
                                         onChange={this.changePassword} className="mr-sm-2"/>
                        </Form.Group>
                        <ButtonToolbar >
                        <Button variant="outline-success"> Submit</Button>
                        <Button variant="outline-success" onClick={this.hideMe}> SignUp</Button>
                        </ButtonToolbar>

                    </Form>
                </Navbar.Collapse>
            </Navbar>
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

export default withTime(Header);
