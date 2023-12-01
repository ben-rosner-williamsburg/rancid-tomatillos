import './movies.css'
import Card from "../cards/cards"
import movieData from "../data"

function Movies({title, poster, averageRating}) {

  const movieCards = movieData.movies.map(movie => {
    console.log(title)
    console.log("MOVIE", movie["poster_path"]); 
  return (
   <Card title={movie.title} poster={movie["poster_path"]} averageRating={movie["average_rating"]}/>
 )
  })
  return (
    <section>
      {movieCards}
    </section>
  )
}

export default Movies