import './BackBtn.css'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function BackBtn({home}) {
  const navigate = useNavigate()
  const handleHomeClick = () => {
    navigate("/")
    home()
  }
  return (
    <div className='btn-container'>
        <Link to="/">
        <span className="material-symbols-outlined home-btn">home</span><p className='home-text'>Home</p>
       </Link> 
      </div>
  )
}

export default BackBtn;


BackBtn.propTypes = {
  handleHomeClick: PropTypes.func
}
