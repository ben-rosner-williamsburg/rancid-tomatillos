// Correct placement of imports
import './App.css';
import Movies from '../Movies/Movies.js';
import Header from '../Header/Header.js';
import DetailPage from '../DetailPage/DetailPage.js';
import Error from "../Error/Error.js";
import { useState, useEffect } from "react";
import { getMovies, getSingleMovie } from "../apiCalls/apiCalls.js";
import { Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const fetchSingleMovie = (id) => {
    getSingleMovie(id)
      .then((data) => {
        setSingleMovie(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleMovieClick = (id) => {
    fetchSingleMovie(id);
    navigate(`/movies/${id}/`); // Navigate to the movie detail page
  };

  const handleHomeClick = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <main className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<Movies movieData={movies} handleClick={handleMovieClick} />} />
        <Route path="movies/:id/" element={<DetailPage singleMovie={singleMovie} home={handleHomeClick} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;
