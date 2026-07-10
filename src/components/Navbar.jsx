import React from 'react'
import { Link } from 'react-router-dom'


function Navbar({className}) {
  return (
    <>
    <div id='nav-parent' className={className}>
        <Link to={'/'} className='nav-child'>Home</Link>
        <Link to={'/about'} className='nav-child'>About</Link>
        <Link to={'/explore'} className='nav-child'>Explore</Link>
        <Link to={'/contact'} className='nav-child'>Contact</Link>
    </div>
    </>
  )
}

export default Navbar