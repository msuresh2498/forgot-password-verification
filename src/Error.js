import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1 className='not-found-head'>404</h1>
      <h2 className='not-found-subhead'>Page Not Found</h2>
      <p><NavLink to="/" className='forgot-btn'>Home</NavLink></p>
    </div>
  )
}

export default Error