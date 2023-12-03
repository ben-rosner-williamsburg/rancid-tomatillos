import './Movies.css'
import Card from "../Cards/Cards"
import React from 'react'
import PropTypes from 'prop-types'

function Movies({movieData, handleClick}) {
  console.log(movieData)
  const movieCards = movieData.map(movie => {
  return (
   <Card 
   style={{ "--background-color": "coral" }}
   backdrop={movie.backdrop_path}
   title={movie.title} 
   poster={movie.poster_path} 
   averageRating={Math.round(movie.average_rating)} 
   id={movie.id} 
   key={movie.id}
   className="card-hover"
   handleClick={handleClick}
   releaseDate={movie.releaseDate}
   />
 )
  })
  return (
    <section className="card-container">
      {movieCards}
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
      releaseDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};
