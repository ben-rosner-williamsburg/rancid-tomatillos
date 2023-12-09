import './App.css';
import Movies from '../Movies/Movies.js';
import Header from '../Header/Header.js';
import DetailPage from '../DetailPage/DetailPage.js';
import Error from "../Error/Error.js"
import { useState, useEffect } from "react";
import { getMovies, getSingleMovie } from "../apiCalls/apiCalls.js";
import { Routes, Route } from "react-router-dom";


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
  const findMovie = (id) => {
    const movieSelected = movieData.find(movie => movie.id === id);
    setSingleMovie(movieSelected);
  }
  return (
    <main className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<Movies movieData={movieData} handleClick={handleClick} error={error} />} />
        <Route path="movies/:id/" element={<DetailPage singleMovie={singleMovie} />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  )
}



// App.propTypes = {
//   movieData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       poster_path: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       average_rating: PropTypes.number.isRequired,
//       release_date: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// DetailPage.propTypes = {
//   movieData: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     poster_path: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     average_rating: PropTypes.number.isRequired,
//     release_date: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default App;