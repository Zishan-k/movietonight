import React, {Component} from 'react';
import './App.css';
import Header from "./main/header/Header";
import LoginPage from "./main/login/LoginPage";
import Movie from "./main/button/Movie";
import SignUp from "./main/login/SignUp";

class App extends Component {
    render() {
        return (
            <div>
                <Header message = 'Movie2Night'/>
                {/*<Movie/>*/}
            </div>
        );
    }
}

export default App;
