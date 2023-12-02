import './movies.css'
import Card from "../cards/cards"

function Movies({movieData}) {
  const movieCards = movieData.movies.map(movie => {
  return (
   <Card 
   style={{ "--background-color": "coral" }}
   title={movie.title} 
   poster={movie.poster_path} 
   averageRating={Math.round(movie.average_rating)} 
   id={movie.id} 
   key={movie.id}
   className="card-hover"/>
 )
  })
  return (
    <section className="card-container">
      {movieCards}
    </section>
  )
}

export default Movies