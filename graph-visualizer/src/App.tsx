import './App.css'

import React, { useState } from 'react'

import Graph from './components/Graph'

const originalElements = [
  {
    data: {
      id: 'node-1',
      generation: 0,
    },
  },
  {
    data: {
      id: 'node-2',
      generation: 0,
    },
  },
  {
    data: {
      id: 'edge-1',
      source: 'node-1',
      target: 'node-2',
      generation: 0,
    },
  },
]

const App: React.FunctionComponent = () => {
  const [elements, setElements] = useState(originalElements)
  const [generation, setGeneration] = useState(0)

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
          <Graph elements={elements.filter((element) => element.data.generation === generation)} />
          <svg width="28" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.42857 19.9286H0V31H13.5714V26.5714H5.42857V19.9286ZM0 11.0714H5.42857V4.42857H13.5714V0H0V11.0714ZM32.5714 26.5714H24.4286V31H38V19.9286H32.5714V26.5714ZM24.4286 0V4.42857H32.5714V11.0714H38V0H24.4286Z"
              fill="black"
            />
          </svg>
        </section>
        <section className="interface flex-column">
          <div>
            <h3>Add node</h3>
          </div>
          <div>
            <h3>Delete node</h3>
          </div>
          <div>
            <h3>Edit node</h3>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
