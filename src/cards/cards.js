function Card({title, poster, id}) {
  return (
    <section>
      <img>{poster}</img>
      <h3>{title}</h3>
    </section>
  )
}

export default Card