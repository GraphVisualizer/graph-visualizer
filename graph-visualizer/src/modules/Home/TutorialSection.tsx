import './style.css'

import React from 'react'

const TutorialSection: React.FunctionComponent = () => {
  return (
    <div className="flex-row top">
      <section className="flex-column">
        <h3>Subheading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </section>
      <div className="fig"></div>
    </div>
  )
}

export default TutorialSection
