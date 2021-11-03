import './style.css'
import './responsive.css'

import React from 'react'

interface ContactTemplateProps {
  personArray: {
    img: string
    fallback: string
    bio: string
    alt: string
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
                <picture>
                  <source type="image/webp" srcSet={person.img}></source>
                  <img src={person.fallback} alt={person.alt} />
                </picture>
              </div>
              <p className="bioContainer">{person.bio}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
