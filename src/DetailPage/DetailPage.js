import './DetailPage.css'
import React from 'react'
import PropTypes from 'prop-types'
import HomeBtn from '../HomeBtn/HomeBtn'
import { useNavigate } from 'react-router-dom'

function DetailPage({ singleMovie, home }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    home();
  };
  return (
    <section className="movie-detail-container">
      <aside className="btn-container">
        <HomeBtn className="home-btn" home={home} handleHomeClick={handleHomeClick} />
      </aside>
      <img
        src={singleMovie.poster_path || "https://via.placeholder.com/300x400.png?text=No+Image"}
        alt="A film poster"
        width="300px"
        height="400px"
        className="movie-poster"
      />
      <aside>
        <h3 className="movie-title movie-element">Title: {singleMovie.title || "Unknown Title"}</h3>
        <p className="movie-rating movie-element">Popularity: {singleMovie.popularity || "N/A"}</p>
        <p className="movie-date movie-element">Release Date: {singleMovie.release_date || "N/A"}</p>
      </aside>
    </section>
  );
}

DetailPage.propTypes = {
  singleMovie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_count: PropTypes.number,
    release_date: PropTypes.string,
  }).isRequired,
  home: PropTypes.func.isRequired,
};


DetailPage.propTypes = {
  home: PropTypes.func.isRequired,
};


export default DetailPage;
