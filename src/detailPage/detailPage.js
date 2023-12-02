import './detailPage.css'


function detailPage({movieData}) {
  console.log(movieData)
  return(
    <section className="movie-detail-container" >
      <img src={movieData.poster_path} alt="A film poster" width="300px" height="400px" />
      <h3>{movieData.title}</h3>
      <p>{movieData.average_rating}</p>
      <p>{movieData.release_date}</p>
      <p>HELLO DETAIL PAGE!</p>
    </section>
  )
}

export default detailPage;