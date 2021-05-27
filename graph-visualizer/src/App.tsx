import './App.css'

import React, { useState } from 'react'

import Button from './components/atoms/Button'
import Graph from './components/Graph'
import Tooltip from './components/Tooltip'
import { useDataStore } from './store/context'

export interface ElemAction {
  selected: string
  add: string
  delete: string
  source: string
  destroy: string
}

export type AlgAction = 'kruskal' | 'karger' | 'djikstra' | 'bfs' | 'dfs' | ''

const App: React.FunctionComponent = () => {
  const [isAlgTabOn, setIsAlgTabOn] = useState(false)

  const store = useDataStore()
  const { bfs, deleteEdge } = store

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
          <Graph />
        </section>
        <section className="interface flex-column">
          <div className="tabs">
            <span>
              <Button onClick={() => setIsAlgTabOn(false)}>General</Button>
            </span>
            <span>
              <Button onClick={() => setIsAlgTabOn(true)}>Algorithms</Button>
            </span>
          </div>
          {!isAlgTabOn ? (
            <div className={'page'} id="general">
              <button onClick={() => null}>Clear</button>
              <div id="addNode">
                <div className="flex-row head">
                  <h3>Add node</h3>
                  <Tooltip />
                </div>
                <Button onClick={() => null}>Add</Button>
              </div>
              <div id="delNode">
                <div className="flex-row head">
                  <h3>Delete node</h3>
                  <Tooltip />
                </div>
                <Button onClick={() => null}>Delete</Button>
              </div>
              <div id="addEdge">
                <div className="flex-row head">
                  <h3>Add edge</h3>
                  <Tooltip />
                </div>
                <Button onClick={() => null}>Add</Button>
              </div>
            </div>
          ) : (
            <div className={'page'} id="algorithms">
              <div>
                <Button onClick={() => null}>
                  <h3>Minimum Spanning Tree</h3>
                </Button>
                <Button onClick={() => null}>
                  <h3>Cut Vertices</h3>
                </Button>
                <Button onClick={() => bfs()}>
                  <h3>Breadth First Search</h3>
                </Button>
                <Button onClick={() => null}>
                  <h3>Depth First Search</h3>
                </Button>
                <Button onClick={() => null}>
                  <h3>Clear</h3>
                </Button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
