import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Cards.css'

function Card({ 
  title, 
  poster, 
  voteCount, 
  popularity, 
  releaseDate, 
  id, 
  handleClick, 
  isFavorite, 
  onToggleFavorite 
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(id);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      // Handle different date formats
      const date = new Date(dateString);
      // Check if date is valid
      if (isNaN(date.getTime())) {
        // Try parsing just the year if it's a simple year format
        const yearMatch = dateString.match(/\d{4}/);
        if (yearMatch) {
          return yearMatch[0];
        }
        return 'N/A';
      }
      return date.getFullYear().toString();
    } catch (error) {
      console.warn('Invalid date format:', dateString);
      return 'N/A';
    }
  };

  const formatPopularity = (pop) => {
    if (!pop || isNaN(pop)) return 'N/A';
    return Math.round(pop);
  };

  const formatVoteCount = (votes) => {
    if (!votes || isNaN(votes)) return '0';
    return votes.toLocaleString();
  };

  // Debug logging to check data
  console.log('Card data:', { title, releaseDate, voteCount, popularity, id });

  return (
    <Link className="card-link" to={`/movies/${id}/`}>
      <article className="movie-card" onClick={() => handleClick(id)}>
        <div className="card-image-container">
          {!imageLoaded && !imageError && (
            <div className="image-placeholder">
              <div className="loading-shimmer"></div>
            </div>
          )}
          <img 
            src={imageError ? "https://via.placeholder.com/300x450/667eea/ffffff?text=No+Image" : poster}
            alt={`${title} movie poster`}
            className={`movie-poster ${imageLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          <button 
            className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
          <div className="card-overlay">
            <div className="overlay-content">
              <h3 className="overlay-title">{title}</h3>
              <div className="overlay-stats">
                <span className="stat">
                  <span className="stat-icon">📅</span>
                  {formatDate(releaseDate)}
                </span>
                <span className="stat">
                  <span className="stat-icon">🔥</span>
                  {formatPopularity(popularity)}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card-content">
          <h3 className="movie-title">{title}</h3>
          <div className="movie-stats">
            <div className="stat-item">
              <span className="stat-label">Votes</span>
              <span className="stat-value">{formatVoteCount(voteCount)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Year</span>
              <span className="stat-value">{formatDate(releaseDate)}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  voteCount: PropTypes.number,
  popularity: PropTypes.number,
  releaseDate: PropTypes.string,
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
}

export default Card;