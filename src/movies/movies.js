import './movies.css'
import Card from "../cards/cards"
import movieData from "../data"

function Movies({title, poster, averageRating}) {
  const movieCards = movieData.movies.map(movie => {
  return (
   <Card title={movie.title} poster={movie["poster_path"]} averageRating={movie["average_rating"]}/>
 )
  })
  return (
    <section class="card-container">
      {movieCards}
    </section>
  )
}

export default Movies