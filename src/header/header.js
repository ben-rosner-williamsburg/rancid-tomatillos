import './header.css'

function Header({home, movieClicked}) {

  return (
    <header className="header-container">
      {movieClicked ? <button className='back-btn' onClick={() => home()}>🔙</button> : <p>Nothing to see here</p>}
      <h1 className='heading-text'>Rancid Tomatillos</h1>
    </header>
  )
}

export default Header;