import './style.css'

import React, { useEffect, useState } from 'react'

interface TutorialTemplateProps {
  tutorialElementsArray: {
    subheading: string
    description: string
    img: string
    alt: boolean
  }[]
}

const TutorialTemplate: React.FunctionComponent<TutorialTemplateProps> = ({
  tutorialElementsArray,
}: TutorialTemplateProps) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 576)
    })
  })

  return (
    <div>
      {tutorialElementsArray.map((ele, index) => {
        return ele.alt && !isMobile ? (
          <div key={index} className="top">
            <section className="flex-column">
              <h3>{ele.subheading}</h3>
              <p>{ele.description}</p>
            </section>
            <div className="fig">
              <img src={ele.img} />
            </div>
          </div>
        ) : (
          <div key={index} className="top alt">
            <div className="fig">
              <img src={ele.img} />
            </div>
            <section className="flex-column">
              <h3>{ele.subheading}</h3>
              <p>{ele.description}</p>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default TutorialTemplate
