import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
      <nav className="navbar">
          <img src={logo} alt="Logo" className='logo' />
          <div className="desktopMenu">
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Who We Are?</Link>
              <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Our Projects</Link>
              <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Our Clients</Link>
              <Link activeClass='active' to='blog' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Blog</Link>
          </div>
       </nav>
  )
}

export default Navbar;