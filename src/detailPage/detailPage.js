import './DetailPage.css'
import React from 'react'
import PropTypes from 'prop-types'
import BackBtn from '../HomeBtn/HomeBtn'
import { useNavigate } from 'react-router-dom'


function DetailPage({singleMovie, home}) {
  const navigate = useNavigate()
  const handleHomeClick = () => {
    navigate("/")
    home()
  }

  console.log("MOVIE DATA", singleMovie)
  return(
    <section className="movie-detail-container" id={singleMovie.id}>
    <aside className='btn-container'>
    <BackBtn className="back-btn" home={home} handleHomeClick={handleHomeClick}/>
    </aside>
      <img src={singleMovie.poster_path} alt="A film poster" width="300px" height="400px" className='movie-poster movie-element'/>
      <aside>
        <h3 className='movie-title movie-element'>Title: {singleMovie.title}</h3>
        <p className='movie-rating movie-element'>Average Rating: {singleMovie.average_rating.toFixed(1)}</p>
        <p className='movie-date movie-element'>Release Date: {singleMovie.release_date}</p>
      </aside>
    </section>
  )
}



DetailPage.propTypes = {
  movieData: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    average_rating: PropTypes.number,
    release_date: PropTypes.string,
  }).isRequired,
};

export default DetailPage;