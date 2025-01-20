import './Movies.css'
import Card from "../Cards/Cards"
import React from 'react'
import PropTypes from 'prop-types'

function Movies({ movieData = [], handleClick, error }) {
  if (error) {
    return <h1>Error: {error}</h1>; // Display an error message
  }

  if (!movieData || movieData.length === 0) {
    return <h2>Loading movies...</h2>; // Fallback while loading data
  }

  const movieCards = movieData.map((movie) => (
    <Card
      key={movie.id}
      title={movie.title}
      poster={movie.poster_path}
      voteCount={movie.vote_count}
      id={movie.id}
      className="card-hover"
      handleClick={handleClick}
    />
  ));

  return (
    <section className="app-container">
      <div className="card-container">{movieCards}</div>
    </section>
  );
}


Movies.propTypes = {
  movieData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      vote_count: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  error: PropTypes.string,
};



export default Movies;
