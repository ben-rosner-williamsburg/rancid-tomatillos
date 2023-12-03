import './detailPage.css'


function detailPage({movieData}) {
  return(
    <section className="movie-detail-container">
      <img src={movieData.poster_path} alt="A film poster" width="300px" height="400px" className='movie-poster movie-element'/>
      <aside>
        <h3 className='movie-title movie-element'>Title: {movieData.title}</h3>
        <p className='movie-rating movie-element'>Average Rating: {movieData.average_rating}</p>
        <p className='movie-date movie-element'>Release Date: {movieData.release_date}</p>
      </aside>
    </section>
  )
}

export default detailPage;