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
  averageRating,
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
    if (!dateString) return null;
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        const yearMatch = dateString.match(/\d{4}/);
        if (yearMatch) {
          return yearMatch[0];
        }
        return null;
      }
      return date.getFullYear().toString();
    } catch (error) {
      console.warn('Invalid date format:', dateString);
      return null;
    }
  };

  const formatRating = (rating) => {
    if (!rating || isNaN(rating)) return null;
    return rating.toFixed(1);
  };

  const formatVoteCount = (votes) => {
    if (!votes || isNaN(votes)) return '0';
    return votes.toLocaleString();
  };

  const formattedDate = formatDate(releaseDate);
  const formattedRating = formatRating(averageRating);

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
                {formattedDate && (
                  <span className="stat">
                    <span className="stat-icon">📅</span>
                    {formattedDate}
                  </span>
                )}
                {formattedRating && (
                  <span className="stat">
                    <span className="stat-icon">⭐</span>
                    {formattedRating}
                  </span>
                )}
                {voteCount && (
                  <span className="stat">
                    <span className="stat-icon">🗳️</span>
                    {formatVoteCount(voteCount)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="card-content">
          <h3 className="movie-title">{title}</h3>
          <div className="movie-stats">
            {formattedRating && (
              <div className="stat-item">
                <span className="stat-label">Rating</span>
                <span className="stat-value">{formattedRating}</span>
              </div>
            )}
            {formattedDate && (
              <div className="stat-item">
                <span className="stat-label">Year</span>
                <span className="stat-value">{formattedDate}</span>
              </div>
            )}
            {voteCount && (
              <div className="stat-item">
                <span className="stat-label">Votes</span>
                <span className="stat-value">{formatVoteCount(voteCount)}</span>
              </div>
            )}
            {!formattedRating && !formattedDate && voteCount && (
              <div className="stat-item">
                <span className="stat-label">Vote Count</span>
                <span className="stat-value">{formatVoteCount(voteCount)}</span>
              </div>
            )}
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
  averageRating: PropTypes.number,
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
}

export default Card;