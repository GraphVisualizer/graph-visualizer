import './style.css'

import React from 'react'

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
  return (
    <div>
      {tutorialElementsArray.map((ele, index) => {
        return ele.alt ? (
          <div key={index} className="flex-row top">
            <section className="flex-column">
              <h3>{ele.subheading}</h3>
              <p>{ele.description}</p>
            </section>
            <div className="fig">
              <img src={ele.img} />
            </div>
          </div>
        ) : (
          <div key={index} className="flex-row top alt">
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
