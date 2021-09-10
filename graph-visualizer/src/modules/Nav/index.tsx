import './style.css'

import React from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FunctionComponent = () => {
  return (
    <nav className="flex-row">
      <Link to="/">
        <h1>Graph Visualizer</h1>
      </Link>
      <ul className="flex-row">
        <li>
          <Link to="/">Tutorials</Link>
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
