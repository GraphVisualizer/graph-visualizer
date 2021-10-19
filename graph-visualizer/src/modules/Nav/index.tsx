import './style.css'

import React from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FunctionComponent = () => {
  return (
    <nav className="flex-row">
      <h1>
        <Link to="/">Graph Visualizer </Link>
      </h1>
      <ul className="flex-row">
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
    </nav>
  )
}

export default Nav
