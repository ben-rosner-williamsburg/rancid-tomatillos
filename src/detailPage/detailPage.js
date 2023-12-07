import './DetailPage.css'
import React from 'react'
import PropTypes from 'prop-types'
import BackBtn from '../BackBtn/BackBtn'
import { useNavigate } from 'react-router-dom'


function DetailPage({movieData, home}) {
  const navigate = useNavigate()
  const handleHomeClick = () => {
    navigate("/")
    home()
  }

  console.log("MOVIE DATA", movieData)
  return(
    <section className="movie-detail-container" id={movieData.id}>
    <aside className='btn-container'>
    <BackBtn className="back-btn" home={home}handleHomeClick={handleHomeClick}/>
    </aside>
      <img src={movieData.poster_path} alt="A film poster" width="300px" height="400px" className='movie-poster movie-element'/>
      <aside>
        <h3 className='movie-title movie-element'>Title: {movieData.title}</h3>
        <p className='movie-rating movie-element'>Average Rating: {movieData.average_rating.toFixed(1)}</p>
        <p className='movie-date movie-element'>Release Date: {movieData.release_date}</p>
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