import './App.css'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Graph from './components/Graph'

export interface ElemAction {
  selected: string
  add: string
  delete: string
  source: string
  destroy: string
}

export type AlgAction = 'kruskal' | 'karger' | 'djikstra' | 'bfs' | 'dfs' | ''

const App: React.FunctionComponent = () => {
  const [isFullScreen, setFullScreen] = useState(false)
  const [isGenTabHidden, setHiddenGenTab] = useState(false)
  const [isAlgTabHidden, setHiddenAlgTab] = useState(true)
  const [isGraphCleared, setIsGraphCleared] = useState(false)
  const [elemActions, setElemActions] = useState<ElemAction>({
    selected: '',
    add: '',
    delete: '',
    source: '',
    destroy: '',
  })
  const [algActions, setAlgActions] = useState<AlgAction>('')

  const addNode = () => {
    setElemActions({
      ...elemActions,
      add: `node-${uuidv4()}`,
    })
  }

  const delNode = () => {
    setElemActions({
      ...elemActions,
      delete: elemActions.selected,
    })
  }

  const addEdge = () => {
    setElemActions({ ...elemActions, source: elemActions.selected, selected: '' })
  }

  const expandVisual = () => {
    setFullScreen(!isFullScreen)
  }

  const toggleTabs = () => {
    setHiddenGenTab(!isGenTabHidden)
    setHiddenAlgTab(!isAlgTabHidden)
  }

  const clearGraph = () => {
    if (!isGraphCleared) setElemActions({ ...elemActions, destroy: 'destroy' })
    setIsGraphCleared(!isGraphCleared)
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
          <Graph elemActions={elemActions} setElemActions={setElemActions} algActions={algActions} />
          <svg
            onClick={expandVisual}
            width="28"
            height="31"
            viewBox="0 0 38 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          />
        </section>
        <section className="interface flex-column">
          <div className="tabs">
            <button disabled>General</button>
            <button disabled>Algorithms</button>
            <button onClick={toggleTabs}>Toggle</button>
          </div>
          <div className={isGenTabHidden ? 'page hide' : 'page'} id="general">
            <button onClick={clearGraph}>Clear</button>
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
            <div id="addEdge">
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
              <button onClick={addEdge}>Add</button>
            </div>
          </div>
          <div className={isAlgTabHidden ? 'page hide' : 'page'} id="algorithms">
            <div>
              <button onClick={() => setAlgActions('kruskal')}>
                <h3>Minimum Spanning Tree</h3>
              </button>
              <button onClick={() => setAlgActions('karger')}>
                <h3>Cut Vertices</h3>
              </button>
              <button onClick={() => setAlgActions('bfs')}>
                <h3>Breadth First Search</h3>
              </button>
              <button onClick={() => setAlgActions('dfs')}>
                <h3>Depth First Search</h3>
              </button>
              <button onClick={() => setAlgActions('')}>
                <h3>Clear</h3>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
