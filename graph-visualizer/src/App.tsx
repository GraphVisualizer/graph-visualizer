import './App.css'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Graph from './components/Graph'

const App: React.FunctionComponent = () => {
  const [newElem, setNewElement] = useState<cytoscape.ElementDefinition>({} as cytoscape.ElementDefinition)
  const [delElem, setDelElement] = useState<string>('')
  const [selectedElem, setSelectedElem] = useState<string>('')

  const addNode = () => {
    setNewElement({
      data: {
        id: `node-${uuidv4()}`,
        generation: 0,
      },
    })
  }

  const delNode = () => {
    setDelElement(selectedElem)
  }

  const editNode = () => {
    console.log()
  }

  return (
    <div className="App">
      <nav className="flex-row">
        <h1>Graph Visualizer</h1>
        <ul className="flex-row">
          <li>Tutorials</li>
          <li>Features</li>
          <li>Learn More</li>
        </ul>
      </nav>
      <div className="main flex-row">
        <section className="visual">
          <Graph newElement={newElem} delElement={delElem} setSelectedElem={setSelectedElem} />
          <svg width="28" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.42857 19.9286H0V31H13.5714V26.5714H5.42857V19.9286ZM0 11.0714H5.42857V4.42857H13.5714V0H0V11.0714ZM32.5714 26.5714H24.4286V31H38V19.9286H32.5714V26.5714ZM24.4286 0V4.42857H32.5714V11.0714H38V0H24.4286Z"
              fill="black"
            />
          </svg>
        </section>
        <section className="interface flex-column">
          <div id="addNode">
            <h3>Add node</h3>
            <button onClick={addNode}>Add</button>
          </div>
          <div id="delNode">
            <h3>Delete node</h3>
            <button onClick={delNode}>Delete</button>
          </div>
          <div id="editNode">
            <h3>Edit node</h3>
            <button onClick={editNode}>Edit</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
