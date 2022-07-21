import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// http://www.omdbapi.com/?i=tt3896198&apikey=e4b923dd'
const API_URL = 'http://www.omdbapi.com?apikey=e4b923dd'; // c032e2d7
// const movie1 = {
//     "Title": "London Has Fallen",
//     "Year": "2016",
//     "imdbID": "tt3300542",
//     "Type": "movie",
//     "Poster": "N/A",// "https://m.media-amazon.com/images/M/MV5BMTY1ODY2MTgwM15BMl5BanBnXkFtZTgwOTY3Nzc3NzE@._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState();


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman'); // Spiderman
    }, [])
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input type="search" placeholder="Search for movies"
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={SearchIcon} alt="Search"
                    onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies?.length > 0 ?
                    (

                        <div className="container">
                            {movies.map((movie) => (
                                <div key={movie.imdbID}>
                                    <MovieCard movie={movie} />
                                </div>

                            ))}

                        </div>
                    )
                    :
                    (
                        <div className="text-white empty"><h2>No movies found</h2></div>
                    )
            }


        </div>
    );
}

export default App;
