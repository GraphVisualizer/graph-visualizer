import './style.css'

import React from 'react'

interface ContactTemplateProps {
  personArray: {
    img: string
    bio: string
  }[]
}

const App: React.FunctionComponent<ContactTemplateProps> = ({ personArray }: ContactTemplateProps) => {
  return (
    <div className="container">
      <div className="title">Meet The Developers</div>
      <div className="flexContainer">
        {personArray.map((person, index) => {
          return (
            <div key={index} className="contactContainer">
              <div className="imageContainer">
                <img src={person.img} />
              </div>
              <div className="bioContainer">{person.bio}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
