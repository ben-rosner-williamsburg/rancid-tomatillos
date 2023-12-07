import './Header.css'
import PropTypes from 'prop-types'
import {useNavigate } from 'react-router-dom'
import BackBtn from "../BackBtn/BackBtn.js" 

function Header({home, movieClicked}) {
  const navigate = useNavigate()
  const handleHomeClick = () => {
    navigate("/")
    home()
  }
  return (
    <header className="header-container">
       <div className='btn-container'>
       { movieClicked? <BackBtn home={home}handleHomeClick={handleHomeClick}/> : <></>}
      </div>
      <h1 className='heading-text'>Rancid Tomatillos</h1>
    </header>
  )
}

export default Header;

Header.propTypes = {
  home: PropTypes.func.isRequired,
  movieClicked: PropTypes.bool.isRequired,
};