import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-light navbar-expand-lg'>
      <Link to='/' className='navbar-brand'>&larr; Back to Login Screen</Link>
    </nav>
  )
}

export default Navbar;