import React, {Component} from 'react';
import Header from "./main/header/Header";
import MovieCard from "./main/component/MovieCard";
import MyCarousel from "./main/component/Carousel";
import Container from "react-bootstrap/Container";



class App extends Component {
    render() {
        return (
            <div>
                <Header message = 'Movie2Night'/>
                <MyCarousel/>
                <MovieCard name = 'Dabang'
                           releaseDate = '20 Dec 2019'
                           info = "Salman's latest movie"
                           rating = '2'
                           imgaeUrl = './movie.jpeg'
                />

            </div>
        );
    }
}

export default App;
