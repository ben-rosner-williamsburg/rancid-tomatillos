import './cards.css'

function Card({title, poster, averageRating, id, handleClick}) {
  return (
    <section className="card" id={id} onClick={() => handleClick(id)}>
      <img src={poster} alt="A film poster" width="300px" height="400px" />
      <h3 className="movie-detail movie-title">{title}</h3>
      <p className="movie-avg-rating movie-detail"> 🍅 {averageRating.toFixed(1)}</p>
    </section>
  );
}

export default Card;