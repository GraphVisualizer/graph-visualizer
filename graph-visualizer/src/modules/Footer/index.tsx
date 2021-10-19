import './style.css'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer: React.FunctionComponent = () => {
  return (
    <div className="flex-column footer">
      <div className="flex-row contact">
        <h4>
          <a href="https://github.com/jfantab/graph-visualizer" rel="noreferrer" target="_blank">
            Github Repo
          </a>
        </h4>
        <h4>
          <FontAwesomeIcon className="icon" icon={faUser} />
          <a href="https://github.com/jfantab" rel="noreferrer" target="_blank">
            Jfantab
          </a>
        </h4>
        <h4>
          <FontAwesomeIcon className="icon" icon={faUser} />
          <a href="https://github.com/ensj" rel="noreferrer" target="_blank">
            Ensj
          </a>
        </h4>
      </div>
      <small>Copyright &#169; 2021</small>
    </div>
  )
}

export default Footer
