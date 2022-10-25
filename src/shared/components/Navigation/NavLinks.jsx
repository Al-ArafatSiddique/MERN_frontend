import React from 'react'
import { NavLink } from 'react-router-dom'

import './navLinks.css'

export default function NavLinks() {
  return (
    <ul className="nav-links">
      <li><NavLink to='/'>All Users</NavLink></li>
      <li><NavLink to='/u1/places'>My Places</NavLink></li>
      <li><NavLink to='/places/new'>Add New</NavLink></li>
      <li><NavLink to='/auth'>Authenticate</NavLink></li>
    </ul>
  )
}
