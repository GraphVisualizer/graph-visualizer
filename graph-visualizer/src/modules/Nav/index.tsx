import './style.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Nav: React.FunctionComponent = () => {
  return (
    <nav className="flex-row">
      <h1>
        <Link to="/">Graph Visualizer </Link>
      </h1>
      <ul className="flex-row">
        <li>
          <HashLink to="/#tutorial">Tutorials</HashLink>
        </li>
        <li>
          <Link to="/app">Application</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
