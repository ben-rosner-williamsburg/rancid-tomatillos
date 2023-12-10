import './HomeBtn.css'
import { Link } from 'react-router-dom'

function HomeBtn() {
  return (
    <div className='btn-container'>
      <Link to="/">
        <span className="material-symbols-outlined home-btn">home</span><p className='home-text'>Home</p>
      </Link>
    </div>
  )
}

export default HomeBtn;

