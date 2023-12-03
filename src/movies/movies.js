import './movies.css'
import Card from "../cards/cards"

function Movies({movieData, handleClick, error}) {
  console.log(error)
  const movieCards = movieData.map(movie => {
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
   handleClick={handleClick}
   releaseDate={movie.releaseDate}
   />
 )
  })
  return (
    <section>
      {!error ? <div className='card-container'>{movieCards}</div> : <h1>500 Error! Try again later!</h1>}
    </section>
  )
}

export default Movies;