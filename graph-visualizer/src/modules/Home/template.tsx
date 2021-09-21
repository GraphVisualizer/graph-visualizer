import './style.css'

import React from 'react'

import GraphTemplate from '../../components/molecules/graphTemplate'

interface TutorialTemplateProps {
  tutorialElementsArray: {
    subheading: string
    description: string
    elements: cytoscape.ElementDefinition[]
    index: number
    alt: boolean
  }[]
}

//  onClick{() => console.log()} event listeners are fillers,
//    to be removed later

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
            <GraphTemplate index={ele.index} elements={ele.elements} />
          </div>
        ) : (
          <div key={index} className="flex-row top alt">
            <GraphTemplate index={ele.index} elements={ele.elements} />
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
