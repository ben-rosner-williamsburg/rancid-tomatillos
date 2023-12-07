import './BackBtn.css'
import { Link, useNavigate } from 'react-router-dom'

function BackBtn({home}) {
  const navigate = useNavigate()
  const handleHomeClick = () => {
    navigate("/")
    home()
  }
  return (
    <div className='btn-container'>
        <Link to="/">
          <button className='back-btn'  onClick={handleHomeClick}>🔙</button>
       </Link> 
      </div>
  )
}

export default BackBtn;