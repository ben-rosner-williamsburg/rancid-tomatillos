import Card from "../cards/cards"
import movieData from "../data"

function Movies({title, poster}) {
  const movieCards = movieData.movies.map(movie => {
    console.log("MOVIE", movie["poster_path"]); 
return (
  <section>
   <Card title={movie.title}/>
   <img src={movie["poster_path"]}></img>
 </section>
)

  })

  return (
    <section>
      {movieCards}
    </section>
  )
}

export default Movies