import './App.css';
import movieData from "./data";
import Movies from './movies/movies';
import { useState, useEffect} from "react"


function App() {
  const [movies, setMovies] = useState([]);

  return (
    <main class="main-container">
      <Movies title={movieData.title} poster={movieData["poster_path"]} averageRating={movieData["average_rating"]} /> 
    </main>
  )
}

export default App;
