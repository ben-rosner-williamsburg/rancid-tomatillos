import './App.css';
import movieData from "../data";
import Movies from '../movies/movies';
import Header from '../header/header';
import DetailPage from '../detailPage/detailPage';
import { useState } from "react";

function App() {
  const [movieClicked, setMovieClicked] = useState(false)
  const [singleMovie, setSingleMovie] = useState([])
  const handleClick = (id) => {
    findMovie(id);
    setMovieClicked(true);
  }
  const home = () => {
    setMovieClicked(false);
    setSingleMovie([])
  }
  const findMovie = (id) => {
    const movieSelected = movieData.movies.find(movie => movie.id === id)
    setSingleMovie(movieSelected)
  }
  return (
    <main className="main-container">
      <Header home={home} movieClicked={movieClicked} />
      {movieClicked ? <DetailPage movieData={singleMovie}/> : <Movies movieData={movieData} handleClick={handleClick}/>}
    </main>
  )
}

export default App;
