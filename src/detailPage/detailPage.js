import './DetailPage.css'
import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'


function DetailPage({movieData}) {
  const id = useParams().id
  console.log(movieData, id)
  return(
    <section className="movie-detail-container" id={movieData.id}>
      <img src={movieData.poster_path} alt="A film poster" width="300px" height="400px" className='movie-poster movie-element'/>
      <aside>
        <h3 className='movie-title movie-element'>Title: {movieData.title}</h3>
        <p className='movie-rating movie-element'>Average Rating: {movieData.average_rating.toFixed(1)}</p>
        <p className='movie-date movie-element'>Release Date: {movieData.release_date}</p>
      </aside>
    </section>
  )
}

export default DetailPage;

DetailPage.propTypes = {
  movieData: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};