// Correct placement of imports
import './App.css';
import Movies from '../Movies/Movies.js';
import Header from '../Header/Header.js';
import DetailPage from '../DetailPage/DetailPage.js';
import Error from "../Error/Error.js";
import { useState, useEffect } from "react";
import { getMovies, getSingleMovie } from "../apiCalls/apiCalls.js";
import { Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getMovies()
      .then((data) => {
        console.log("Fetched movies:", data); // Debugging log
        setMovies(data|| []); // Ensure a fallback to an empty array
      })
      .catch((error) => {
        console.error("Error fetching movies:", error); // Debug error
        setError(error.message);
      });
  };

  const fetchSingleMovie = (id) => {
    getSingleMovie(id)
      .then((data) => {
        setSingleMovie(data.movie);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleMovieClick = (id) => {
    fetchSingleMovie(id);
    findMovie(id);
  };

  const findMovie = (id) => {
    const movieSelected = movies.find((movie) => movie.id === id);
    setSingleMovie(movieSelected);
  };

  return (
    <main className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<Movies movieData={movies} handleClick={handleMovieClick} />} />
        <Route path="movies/:id/" element={<DetailPage singleMovie={singleMovie} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;
