import './Movies.css'
import Card from "../Cards/Cards"
import React from 'react'
import PropTypes from 'prop-types'

function Movies({movieData, handleClick, error}) {
  const movieCards = movieData.map(movie => {
  return (
   <Card 
   title={movie.title} 
   poster={movie.poster_path} 
   averageRating={Math.round(movie.average_rating)} 
   id={movie.id} 
   key={movie.id}
   className="card-hover"
   handleClick={handleClick}
   releaseDate={movie.release_date}
   />
 )
  })
  return (
    <section class="app-container">
      {!error ? <div className='card-container'>{movieCards}</div> : <h1>500 Error! Try again later!</h1>}
    </section>
  )
}

export default Movies;

Movies.propTypes = {
  movieData: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};
