import './HomeBtn.css'
import { Link } from 'react-router-dom'

function HomeBtn({ handleHomeClick }) {
  return (
    <Link to="/" onClick={handleHomeClick} className="home-btn-link">
      <button className="modern-home-btn">
        <span className="home-icon">🏠</span>
        <span className="home-text">Home</span>
      </button>
    </Link>
  )
}

export default HomeBtn;