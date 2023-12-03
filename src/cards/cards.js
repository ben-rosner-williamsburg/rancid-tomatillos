import './cards.css'
import { useState } from "react";

function Card({ title, poster, averageRating, id, setMovieClicked, handleClick}) {
  // const [movieClicked, setMovieClicked] = useState(false);
  // const handleClick = (id, event) => {
  //   // event.preventDefault();
    
  //   setMovieClicked(true);
  //   console.log("clicked");
  // }
  return (
        <section className="card" id={id} onClick={() => handleClick(id)}>
          <img src={poster} alt="A film poster" width="300px" height="400px" />
          <h3>{title}</h3>
          <p>{averageRating}</p>
        </section>
  );
}

export default Card;