import React from 'react';
import './SearchAndFilter.css';

function SearchAndFilter({ onSearch, onSort, searchTerm, sortBy }) {
  return (
    <div className="search-filter-container">
      <div className="search-section">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => onSearch('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>
      
      <div className="sort-section">
        <label htmlFor="sort-select" className="sort-label">Sort by:</label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => onSort(e.target.value)}
          className="sort-select"
        >
          <option value="title">Title (A-Z)</option>
          <option value="release_date">Release Date (Newest)</option>
          <option value="vote_count">Vote Count (Highest)</option>
          <option value="popularity">Popularity (Highest)</option>
        </select>
      </div>
    </div>
  );
}

export default SearchAndFilter;