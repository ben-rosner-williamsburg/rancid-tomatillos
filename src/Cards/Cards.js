import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Cards.css'


function Card({ title, poster, voteCount, id, handleClick }) {
  return (
    <Link className="link" to={`/movies/${id}/`}>
      <section className="card" id={id} onClick={() => handleClick(id)}>
        <img src={poster} alt="A film poster" width="300px" height="400px" />
        <h3 className="movie-detail movie-title">{title}</h3>
        <p className="movie-avg-rating movie-detail"> Vote Count: {voteCount}</p>
      </section>
    </Link>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  id: PropTypes.number,
  handleClick: PropTypes.func
}