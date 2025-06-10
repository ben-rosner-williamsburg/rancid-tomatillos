import './Header.css'

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className='heading-text'>🍅 Rancid Tomatillos</h1>
        <p className="header-subtitle">Discover your next favorite movie</p>
      </div>
      <div className="header-decoration">
        <div className="floating-tomato">🍅</div>
        <div className="floating-tomato">🍅</div>
        <div className="floating-tomato">🍅</div>
      </div>
    </header>
  )
}

export default Header;