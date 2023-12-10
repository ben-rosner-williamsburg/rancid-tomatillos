import './DetailPage.css'
import React from 'react'
import PropTypes from 'prop-types'
import HomeBtn from '../HomeBtn/HomeBtn'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleMovie } from '../apiCalls/apiCalls'
import { useState, useEffect } from 'react'

function DetailPage({ home }) {
  const [singleMovie, setSingleMovie] = useState({});
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const params = useParams()
  const handleHomeClick = () => {
    navigate("/")
    home()
  }

  useEffect(() => {
    fetchSingleMovie(ID);
  }, []);

let ID = params.id

const fetchSingleMovie = (ID) => {
  getSingleMovie(ID)
    .then((data) => {
      setSingleMovie(data.movie);
    })
    .catch((error) => {
      setError(error.message);
    });
};

  return (
    <section className="movie-detail-container" id={params.id}>
      <aside className='btn-container'>
        <HomeBtn className="home-btn" home={home} handleHomeClick={handleHomeClick} />
      </aside>
      <img src={singleMovie.poster_path} alt="A film poster" width="300px" height="400px" className='movie-poster'  />
      <aside>
        <h3 className='movie-title movie-element'>Title: {singleMovie.title}</h3>
        <p className='movie-rating movie-element'>Average Rating: {singleMovie.average_rating}</p>
        <p className='movie-date movie-element'>Release Date: {singleMovie.release_date}</p>
      </aside>
    </section>
  )
}



DetailPage.propTypes = {
  singleMovie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    average_rating: PropTypes.number,
    release_date: PropTypes.string,
  }).isRequired,
};

export default DetailPage;
