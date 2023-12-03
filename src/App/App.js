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
    findMovie(id)
    setMovieClicked(true)
  }

  function findMovie(id) {
    const movieSelected = movieData.movies.find(movie => movie.id === id)
    console.log(movieSelected)
    setSingleMovie(movieSelected)
  }
  // const home = () => {
  //   setMovieClicked(false)
  // }
  return (
    <main className="main-container">
      <Header />
      {movieClicked ? <DetailPage movieData={singleMovie}/> : <Movies movieData={movieData} handleClick={handleClick}/>}
    </main>
  )
}

export default App;
