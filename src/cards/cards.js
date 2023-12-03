import './cards.css'

function Card({ title, poster, averageRating, id, handleClick}) {
  return (
        <section className="card" id={id} onClick={() => handleClick(id)}>
          <img src={poster} alt="A film poster" width="300px" height="400px" />
          <h3>{title}</h3>
          <p>{averageRating}</p>
        </section>
  );
}

export default Card;