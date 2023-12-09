import './Error.css'
import HomeBtn from '../HomeBtn/HomeBtn'

function Error() {
  return (
    <section className='error-container'>
      <div className="btn-container">
        <HomeBtn />
      </div>
      <div className="message-container">
        <h1 className="error">400 Error: Page Not Found</h1>
      </div>
    </section>
  )
}

export default Error;