import React, {Component} from 'react';
import './App.css';
import Header from "./main/header/Header";
import Movie from "./main/button/Movie";

class App extends Component {
    render() {
        return (
            <div>
                <Header message = 'Movie2Night'/>
                <Movie/>
                {/*<Movie/>*/}
            </div>
        );
    }
}

export default App;
