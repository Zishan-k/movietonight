import React, {Component} from 'react';
import './App.css';
import Header from "./main/header/Header";
import LoginPage from "./main/login/LoginPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header message = 'Movie2Night'/>
                <LoginPage/>
            </div>
        );
    }
}

export default App;
