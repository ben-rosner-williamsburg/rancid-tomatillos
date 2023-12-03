import './App.css';
import Movies from '../movies/movies';
import Header from '../header/header';
import DetailPage from '../detailPage/detailPage';
import { useState, useEffect } from "react";

function App() {
  const [movieClicked, setMovieClicked] = useState(false);
  const [singleMovie, setSingleMovie] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState("");

  const getMovies = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovieData(data.movies))
    .catch(error => setError(error))
  }

  useEffect(() => {
    getMovies()
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
