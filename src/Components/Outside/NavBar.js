import React from 'react';
import { Link } from 'react-router-dom';
import MicroskoolIcon from '/Users/Erim/Documents/GitHub/microskool-stable/src/ImageResources/micro.png';

function NavBar() {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <img className="navbar-brand microskool-icon" alt='Microskool-Logo' src={MicroskoolIcon} href="welcome" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to='/signin'>Sign In </Link>
      </li>

      <li className="nav-item" >
      <Link to='/signup'> Sign Up</Link>
      </li>

      <li className="nav-item">
      <Link to='/reset' > Reset</Link>
      </li>
     
    </ul>
    
  </div>
</nav>
    
    
    
    
    </>
  )
}

export default NavBar