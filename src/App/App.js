import './App.css';
import Movies from '../Movies/Movies.js';
import Header from '../Header/Header.js';
import DetailPage from '../DetailPage/DetailPage.js';
import { useState, useEffect } from "react";
import {getMovies, getSingleMovie} from "../apiCalls/apiCalls.js";
import {Routes, Route } from  "react-router-dom";


function App() {
  const [movieClicked, setMovieClicked] = useState(false);
  const [singleMovie, setSingleMovie] = useState({});
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getMovies()
    .then((data) => {
      setMovieData(data.movies)
    })
    .catch((error) => {
      setError(error.message)
    })
  }

  const fetchSingleMovie = (id) => {
    getSingleMovie(id)
    .then((data) => {
      setSingleMovie(data.movie)
    })
    .catch((error) => {
      setError(error.message)
    })
  }

  const handleClick = (id) => {
    fetchSingleMovie(id);
    findMovie(id);
    setMovieClicked(true);
  }
  const home = () => {
    setMovieClicked(false);
    setSingleMovie({});
  }
  const findMovie = (id) => {
    const movieSelected = movieData.find(movie => movie.id === id);
    setSingleMovie(movieSelected);
  }

  return (

    <main className="main-container">
      <Header home={home} movieClicked={movieClicked} />
      <Routes>
       <Route path="/"/>
      {movieClicked && <Route path="/:id" element = {<DetailPage movieData={singleMovie} />} />}
      </Routes>
      {!movieClicked && <Movies movieData={movieData}  handleClick={handleClick} error={error}/>}
    </main>
  )
}

export default App;
