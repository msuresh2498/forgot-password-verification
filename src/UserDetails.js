import React from 'react'
import { NavLink } from 'react-router-dom'

const UserDetails = () => {
  return (
    <div className='userDetails'>
      <p>Welcome to Our Website</p>
      <p><NavLink to="/" className='forgot-btn'>Home</NavLink></p>
    </div>
  )
}

export default UserDetails