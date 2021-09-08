import './style.css'

import React from 'react'

const Footer: React.FunctionComponent = () => {
  return (
    <div className="flex-column footer">
      <div className="flex-row contact">
        <h4>
          <a>Github</a>
        </h4>
        <h4>Contact 1</h4>
        <h4>Contact 2</h4>
      </div>
      <small>Copyright &#169; 2021</small>
    </div>
  )
}

export default Footer
