import './App.css';
import Movies from '../Movies/Movies.js';
import Header from '../Header/Header.js';
import DetailPage from '../DetailPage/DetailPage';
import { useState, useEffect } from "react";
import {getMovies} from "../apiCalls/apiCalls.js";

function App() {
  const [movieClicked, setMovieClicked] = useState(false);
  const [singleMovie, setSingleMovie] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState("");

  
  const fetchData = () => {
    getMovies()
    .then((data) => {
      console.log("DATA", data.movies)
      setMovieData(data.movies)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchData()
  }, []);


  const handleClick = (id) => {
    findMovie(id);
    setMovieClicked(true);
  }
  const home = () => {
    setMovieClicked(false);
    setSingleMovie([]);
  }
  const findMovie = (id) => {
    const movieSelected = movieData.find(movie => movie.id === id);
    setSingleMovie(movieSelected);
  }

  return (
    <main className="main-container">
      <Header home={home} movieClicked={movieClicked} />
      {movieClicked ? <DetailPage movieData={singleMovie}/> : <Movies movieData={movieData} error={error} handleClick={handleClick}/>}
    </main>
  )
}

export default App;
