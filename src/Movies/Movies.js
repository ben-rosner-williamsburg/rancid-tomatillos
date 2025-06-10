import './Movies.css'
import Card from "../Cards/Cards"
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter"
import React from 'react'
import PropTypes from 'prop-types'

function Movies({ 
  movieData = [], 
  handleClick, 
  onSearch, 
  onSort, 
  searchTerm, 
  sortBy,
  favorites,
  onToggleFavorite 
}) {
  if (!movieData || movieData.length === 0) {
    return (
      <div className="no-movies-container">
        <div className="no-movies-content">
          <h2 className="no-movies-title">🎬 No movies found</h2>
          <p className="no-movies-text">
            {searchTerm ? 
              `No movies match "${searchTerm}". Try a different search term.` : 
              "Loading movies..."
            }
          </p>
        </div>
      </div>
    );
  }

  const movieCards = movieData.map((movie) => {
    console.log('Individual Movie Object:', movie);
    
    return (
      <Card
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        // Map the correct field names from the API
        voteCount={movie.vote_count}
        popularity={movie.popularity}
        releaseDate={movie.release_date}
        averageRating={movie.average_rating}
        id={movie.id}
        handleClick={handleClick}
        isFavorite={favorites.includes(movie.id)}
        onToggleFavorite={onToggleFavorite}
      />
    );
  });

  return (
    <section className="movies-container">
      <SearchAndFilter 
        onSearch={onSearch}
        onSort={onSort}
        searchTerm={searchTerm}
        sortBy={sortBy}
      />
      <div className="results-info">
        <p className="results-count">
          {movieData.length} movie{movieData.length !== 1 ? 's' : ''} found
        </p>
      </div>
      <div className="card-container">{movieCards}</div>
    </section>
  );
}

Movies.propTypes = {
  movieData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      vote_count: PropTypes.number,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default Movies;