export default function Bottom() {
    return (
      <div className='bottom'>
          <button 
            id = "contact"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='mailto:luigimagdamit@g.ucla.edu';
            }}>Send me an email!</button>
          <p id = "bottom">i love my friends!</p>
          <h3>© Luigi Magdamit 2023</h3>
        </div>
    )
  }