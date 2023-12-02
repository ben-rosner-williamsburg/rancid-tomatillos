import './movies.css'
import Card from "../cards/cards"

function Movies({movieData, setMovieClicked, handleClick}) {
  const movieCards = movieData.movies.map(movie => {
  return (
   <Card 
   style={{ "--background-color": "coral" }}
   backdrop={movie.backdrop_path}
   title={movie.title} 
   poster={movie.poster_path} 
   averageRating={Math.round(movie.average_rating)} 
   id={movie.id} 
   key={movie.id}
   className="card-hover"
   setMovieClicked={setMovieClicked}
   handleClick={handleClick}
   releaseDate={movie.releaseDate}
   />
 )
  })
  return (
    <section className="card-container">
      {movieCards}
    </section>
  )
}

export default Movies