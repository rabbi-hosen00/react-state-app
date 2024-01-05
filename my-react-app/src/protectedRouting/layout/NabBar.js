import React from 'react'
import { Link } from 'react-router-dom';

import"./NavBar.css"

const NabBar = () => {
  return (
    <nab className="nav">
      <Link to="/" className='nav-link'>Home</Link>
      <Link to="/add-blog" className='nav-link'>Add Blog</Link>
      <Link to="/about" className='nav-link'>About</Link>
    </nab>
  )
}

export default NabBar;
