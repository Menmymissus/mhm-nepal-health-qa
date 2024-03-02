import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
  <>
  <div className="spinner-container">
    <p className="spinner-top-text">Please Wait...</p>
    <div>

  <span class="loader"></span>
    </div>
  <p className="spinner-bottom-text">The Model is working on your question.</p>
  </div>
  </>

  )
}

export default Spinner