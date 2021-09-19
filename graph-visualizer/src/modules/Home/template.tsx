import './style.css'

import React from 'react'

import Button from '../../components/atoms/Button'
import GraphTemplate from '../../components/molecules/graphTemplate'

interface TutorialTemplateProps {
  tutorialElementsArray: {
    subheading: string
    description: string
    elements: cytoscape.ElementDefinition[]
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
            <div className="fig">
              <Button onClick={() => console.log()}>Fn</Button>
              <GraphTemplate elements={ele.elements} />
            </div>
          </div>
        ) : (
          <div key={index} className="flex-row top alt">
            <div className="fig">
              <Button onClick={() => console.log()}>Fn</Button>
              <GraphTemplate elements={ele.elements} />
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
function uuidv4() {
  throw new Error('Function not implemented.')
}
