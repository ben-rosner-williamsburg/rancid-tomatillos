import './Error.css'
import HomeBtn from '../HomeBtn/HomeBtn'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <section className='error-container'>
      <div className="error-content">
        <div className="error-animation">
          <div className="error-icon">🎬</div>
          <div className="error-icon">💥</div>
          <div className="error-icon">🍅</div>
        </div>
        
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Page Not Found</h2>
        <p className="error-message">
          Looks like this movie got lost in the credits! 
          Let's get you back to the main feature.
        </p>
        
        <div className="error-actions">
          <HomeBtn handleHomeClick={handleHomeClick} />
        </div>
      </div>
    </section>
  )
}

export default Error;