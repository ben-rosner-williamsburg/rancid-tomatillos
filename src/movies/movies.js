import './movies.css'
import Card from "../cards/cards"

function Movies({movieData}) {
  const movieCards = movieData.movies.map(movie => {
  return (
   <Card title={movie.title} 
   poster={movie.poster_path} 
   averageRating={Math.round(movie.average_rating)} 
   id={movie.id} 
   key={movie.id}/>
 )
  })
  return (
    <section class="card-container">
      {movieCards}
    </section>
  )
}

export default Movies