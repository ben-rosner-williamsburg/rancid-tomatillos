import './DetailPage.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HomeBtn from '../HomeBtn/HomeBtn'
import { useNavigate } from 'react-router-dom'

function DetailPage({ singleMovie, home, isFavorite, onToggleFavorite }) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
    home();
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatRating = (rating) => {
    if (!rating) return null;
    return rating.toFixed(1);
  };

  const formatVoteCount = (votes) => {
    if (!votes) return null;
    return votes.toLocaleString();
  };

  return (
    <section className="movie-detail-container">
      <div className="detail-background">
        <img 
          src={singleMovie.backdrop_path || singleMovie.poster_path} 
          alt="" 
          className="background-image"
        />
        <div className="background-overlay"></div>
      </div>
      
      <div className="detail-content">
        <div className="detail-header">
          <HomeBtn handleHomeClick={handleHomeClick} />
          <button 
            className={`detail-favorite-btn ${isFavorite ? 'favorited' : ''}`}
            onClick={onToggleFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
        </div>

        <div className="detail-main">
          <div className="poster-section">
            <div className="poster-container">
              {!imageLoaded && !imageError && (
                <div className="poster-placeholder">
                  <div className="loading-shimmer"></div>
                </div>
              )}
              <img
                src={imageError ? "https://via.placeholder.com/400x600/667eea/ffffff?text=No+Image" : singleMovie.poster_path}
                alt={`${singleMovie.title} movie poster`}
                className={`detail-poster ${imageLoaded ? 'loaded' : ''}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
          </div>

          <div className="info-section">
            <h1 className="detail-title">{singleMovie.title || "Unknown Title"}</h1>
            
            <div className="movie-meta">
              <div className="meta-grid">
                {formatDate(singleMovie.release_date) && (
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <div className="meta-content">
                      <span className="meta-label">Release Date</span>
                      <span className="meta-value">{formatDate(singleMovie.release_date)}</span>
                    </div>
                  </div>
                )}
                
                {formatRating(singleMovie.average_rating) && (
                  <div className="meta-item">
                    <span className="meta-icon">⭐</span>
                    <div className="meta-content">
                      <span className="meta-label">Average Rating</span>
                      <span className="meta-value">{formatRating(singleMovie.average_rating)}</span>
                    </div>
                  </div>
                )}
                
                {formatVoteCount(singleMovie.vote_count) && (
                  <div className="meta-item">
                    <span className="meta-icon">🗳️</span>
                    <div className="meta-content">
                      <span className="meta-label">Vote Count</span>
                      <span className="meta-value">{formatVoteCount(singleMovie.vote_count)}</span>
                    </div>
                  </div>
                )}
                
                {singleMovie.popularity && (
                  <div className="meta-item">
                    <span className="meta-icon">🔥</span>
                    <div className="meta-content">
                      <span className="meta-label">Popularity</span>
                      <span className="meta-value">{Math.round(singleMovie.popularity)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {singleMovie.overview && (
              <div className="overview-section">
                <h3 className="overview-title">Overview</h3>
                <p className="overview-text">{singleMovie.overview}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

DetailPage.propTypes = {
  singleMovie: PropTypes.shape({
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    vote_count: PropTypes.number,
    average_rating: PropTypes.number,
    popularity: PropTypes.number,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  home: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default DetailPage;