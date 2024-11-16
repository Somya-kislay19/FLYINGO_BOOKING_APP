import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

function Homu  () {
    const location=useLocation()

  return (
    <div className='homepage'>
      <h1>
        Hello {location.state.id} and Welcome to the website
      </h1>
    </div>
  )
}

export default Homu
