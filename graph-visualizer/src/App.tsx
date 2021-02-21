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
  const [isFullScreen, setFullScreen] = useState(false)
  const [isGenTabHidden, setHiddenGenTab] = useState(false)
  const [isAlgTabHidden, setHiddenAlgTab] = useState(true)
  const addNode = () => {
    console.log()
  }

  const delNode = () => {
    console.log()
  }

  const editNode = () => {
    console.log()
  }

  const expandVisual = () => {
    setFullScreen(!isFullScreen)
  }

  const toggleTabs = () => {
    setHiddenGenTab(!isGenTabHidden)
    setHiddenAlgTab(!isAlgTabHidden)
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
        <section className={isFullScreen ? 'visual fullscreen' : 'visual'}>
          <Graph elements={elements.filter((element) => element.data.generation === generation)} />
          <svg
            onClick={expandVisual}
            width="28"
            height="31"
            viewBox="0 0 38 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.42857 19.9286H0V31H13.5714V26.5714H5.42857V19.9286ZM0 11.0714H5.42857V4.42857H13.5714V0H0V11.0714ZM32.5714 26.5714H24.4286V31H38V19.9286H32.5714V26.5714ZM24.4286 0V4.42857H32.5714V11.0714H38V0H24.4286Z"
              fill="black"
            />
          </svg>
        </section>
        <section className="interface flex-column">
          <div className="tabs">
            <button disabled>General</button>
            <button disabled>Algorithms</button>
            <button onClick={toggleTabs}>Toggle</button>
          </div>
          <div className={isGenTabHidden ? 'page hide' : 'page'} id="general">
            <div id="addNode">
              <div className="flex-row head">
                <h3>Add node</h3>
                <svg
                  className="tooltip"
                  width="5"
                  height="5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z"
                    fill="black"
                  />
                </svg>
              </div>
              <button onClick={addNode}>Add</button>
            </div>
            <div id="delNode">
              <div className="flex-row head">
                <h3>Delete node</h3>
                <svg
                  className="tooltip"
                  width="5"
                  height="5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z"
                    fill="black"
                  />
                </svg>
              </div>
              <button onClick={delNode}>Delete</button>
            </div>
            <div id="editNode">
              <div className="flex-row head">
                <h3>Add edge</h3>
                <svg
                  className="tooltip"
                  width="5"
                  height="5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z"
                    fill="black"
                  />
                </svg>
              </div>
              <button onClick={editNode}>Add</button>
            </div>
          </div>
          <div className={isAlgTabHidden ? 'page hide' : 'page'} id="algorithms">
            <div>
              <h3>Djikstras Algorithm</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
