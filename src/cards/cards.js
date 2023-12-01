import './cards.css'

function Card({title, poster, averageRating, id}) {
  return (
    <section className="card">
      <img src={poster} alt="A film poster" width="400px" height="400px" />
      <h3>{title}</h3>
      <p>{averageRating}</p>
    </section>
  )
}

export default Card