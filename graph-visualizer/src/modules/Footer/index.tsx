import './style.css'
import './responsive.css'

import React from 'react'

const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <div className="flex-column">
        <h4>
          <i className="fas fa-code-branch"></i>
          <a href="https://github.com/jfantab/graph-visualizer" rel="noreferrer" target="_blank">
            Github
          </a>
        </h4>
        <h4>
          <i className="fas fa-share-alt"></i>
          <a href="https://devpost.com/software/graph-visualizer-sondk0" rel="noreferrer" target="_blank">
            Devpost
          </a>
        </h4>
      </div>
      <div className="flex-column">
        <h4>
          <i className="fab fa-github"></i>
          <a href="https://github.com/jfantab" rel="noreferrer" target="_blank">
            John
          </a>
        </h4>
        <h4>
          <i className="fab fa-github"></i>
          <a href="https://github.com/ensj" rel="noreferrer" target="_blank">
            Junhyun
          </a>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
