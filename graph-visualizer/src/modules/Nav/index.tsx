import './style.css'
import './responsive.css'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav>
      <h1>
        <Link to="/">Graph Visualizer </Link>
      </h1>
      <i onClick={toggleMenu} className="mobile-toggle fas fa-bars"></i>
      <ul className="desktop">
        <li>
          <Link to="/#tutorial">Tutorials</Link>
        </li>
        <li>
          <Link to="/app">Application</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <ul className={isMenuOpen ? 'mobile-menu mobile' : 'mobile'}>
        <i onClick={toggleMenu} className="mobile-menu-close fas fa-times"></i>
        <li onClick={toggleMenu}>
          <Link to="/#tutorial">Tutorials</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/app">Application</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
