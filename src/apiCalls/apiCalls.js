// TMDb API configuration
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getMovies = () => {
  return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status)
      } else {
        return response.json()
      }
    })
    .then((data) => {
      return data.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null,
        backdrop_path: movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : null,
        average_rating: movie.vote_average,
        vote_count: movie.vote_count,
        popularity: movie.popularity,
        release_date: movie.release_date,
        overview: movie.overview
      }));
    });
};

export const getSingleMovie = (id) => {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status)
      }
      else {
        return response.json()
      }
    })
    .then((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null,
        backdrop_path: movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : null,
        average_rating: movie.vote_average,
        vote_count: movie.vote_count,
        popularity: movie.popularity,
        release_date: movie.release_date,
        overview: movie.overview
      };
    });
}