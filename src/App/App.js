import './App.css';
import movieData from "../data";
import Movies from '../movies/movies';
import Header from '../header/header'
import { useState, useEffect} from "react"


function App() {
  const [movies, setMovies] = useState([]);

  return (
    <main className="main-container">
      <Header/>
      <Movies movieData={movieData} /> 
    </main>
  )
}

export default App;
