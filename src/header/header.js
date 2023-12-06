import './Header.css'
import React from 'react'
import PropTypes from 'prop-types'
import {Link, useNavigate} from 'react-router-dom'

function Header({home, movieClicked}) {
  const navigate = useNavigate();
  
  return (
    <header className="header-container">
      {movieClicked ? <div className='btn-container'><Link to="/"><button className='back-btn' onClick={() => navigate(-1)}>🔙</button></Link></div> : <div className='btn-container'></div>}
      <h1 className='heading-text'>Rancid Tomatillos</h1>
    </header>
  )
}

export default Header;

Header.propTypes = {
  home: PropTypes.func.isRequired,
  movieClicked: PropTypes.bool.isRequired,
};