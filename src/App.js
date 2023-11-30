import './App.css';
import movieData from "./data";
import Movies from './movies/movies';
import { useState, useEffect} from "react"


function App() {
  const [movies, setMovies] = useState([]);

  return (
    <main>
      <h1>Rancid Tomatillos</h1>
      <div>
        <Movies movieData={movieData}/> 
      </div>
    </main>
  )
}

export default App;
