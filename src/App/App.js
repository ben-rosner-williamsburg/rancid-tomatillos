import './App.css';
import Movies from '../Movies/Movies.js';
import Header from '../Header/Header.js';
import DetailPage from '../DetailPage/DetailPage.js';
import Error from "../Error/Error.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.js";
import { useState, useEffect } from "react";
import { getMovies, getSingleMovie } from "../apiCalls/apiCalls.js";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    loadFavorites();
  }, []);

  useEffect(() => {
    filterAndSortMovies();
  }, [movies, searchTerm, sortBy]);

  const fetchData = () => {
    setLoading(true);
    getMovies()
      .then((data) => {
        console.log('Full API Response:', data);
        // The API returns the movies array directly
        const movieList = Array.isArray(data) ? data : (data.movies || []);
        console.log('Movie List:', movieList);
        console.log('First Movie Sample:', movieList[0]);
        
        // Log the actual field names to debug
        if (movieList.length > 0) {
          console.log('Available fields:', Object.keys(movieList[0]));
        }
        
        setMovies(movieList);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchSingleMovie = (id) => {
    setLoading(true);
    getSingleMovie(id)
      .then((data) => {
        console.log('Single Movie API Response:', data);
        // Handle both direct movie object and wrapped response
        const movieData = Array.isArray(data) ? data[0] : (data.movie || data || {});
        console.log('Single Movie Data:', movieData);
        console.log('Single Movie Fields:', Object.keys(movieData));
        setSingleMovie(movieData);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filterAndSortMovies = () => {
    let filtered = movies.filter(movie =>
      movie.title && movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return (a.title || '').localeCompare(b.title || '');
        case "release_date":
          const dateA = new Date(a.release_date || '1900-01-01');
          const dateB = new Date(b.release_date || '1900-01-01');
          return dateB - dateA;
        case "vote_count":
          return (b.vote_count || 0) - (a.vote_count || 0);
        case "popularity":
          return (b.popularity || 0) - (a.popularity || 0);
        default:
          return 0;
      }
    });

    setFilteredMovies(filtered);
  };

  const handleMovieClick = (id) => {
    fetchSingleMovie(id);
    navigate(`/movies/${id}/`);
  };

  const handleHomeClick = () => {
    navigate("/");
    setError("");
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
  };

  const toggleFavorite = (movieId) => {
    const updatedFavorites = favorites.includes(movieId)
      ? favorites.filter(id => id !== movieId)
      : [...favorites, movieId];
    
    setFavorites(updatedFavorites);
    localStorage.setItem('movieFavorites', JSON.stringify(updatedFavorites));
  };

  const loadFavorites = () => {
    const savedFavorites = localStorage.getItem('movieFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  };

  if (error && error !== "404") {
    return (
      <main className="main-container">
        <Header />
        <div className="error-state">
          <h1 className="server-error">500 Error! Try again later!</h1>
          <button className="retry-btn" onClick={fetchData}>
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="main-container">
      <Header />
      {loading && <LoadingSpinner />}
      <Routes>
        <Route 
          path="/" 
          element={
            <Movies 
              movieData={filteredMovies} 
              handleClick={handleMovieClick}
              onSearch={handleSearch}
              onSort={handleSort}
              searchTerm={searchTerm}
              sortBy={sortBy}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          } 
        />
        <Route 
          path="movies/:id/" 
          element={
            <DetailPage 
              singleMovie={singleMovie} 
              home={handleHomeClick}
              isFavorite={favorites.includes(singleMovie.id)}
              onToggleFavorite={() => toggleFavorite(singleMovie.id)}
            />
          } 
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;