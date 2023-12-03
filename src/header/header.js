import './Header.css'
import React from 'react'
import PropTypes from 'prop-types'

function Header({home, movieClicked}) {

  return (
    <header className="header-container">
      {movieClicked ? <div className='btn-container'><button className='back-btn' onClick={() => home()}>🔙</button></div> : <div className='btn-container'></div>}
      <h1 className='heading-text'>Rancid Tomatillos</h1>
    </header>
  )
}

export default Header;

Header.propTypes = {
  home: PropTypes.func.isRequired,
  movieClicked: PropTypes.bool.isRequired,
};