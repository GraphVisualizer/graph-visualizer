import './App.css'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Button from './components/atoms/Button'
import Graph from './components/Graph'
import AdjacencyImportForm from './components/organisms/AdjacencyImportForm'
import Tooltip from './components/Tooltip'
import { useDataStore } from './store/context'

const App: React.FunctionComponent = () => {
  const store = useDataStore()

  const {
    addNode,
    addEdge,
    deleteNode,
    resetGraph,
    clearGraphAlgs,
    bfs,
    dfs,
    complete,
    star,
    wheel,
    completeBipartite,
    cycle,
    kruskal,
  } = store

  const [isAlgTabOn, setIsAlgTabOn] = useState(false)

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
              <button onClick={() => resetGraph()}>Clear</button>
              <div id="addNode">
                <div className="flex-row head">
                  <h3>Add node</h3>
                  <Tooltip />
                </div>
                <Button onClick={() => addNode(uuidv4())}>Add</Button>
              </div>
              <div id="delNode">
                <div className="flex-row head">
                  <h3>Delete node</h3>
                  <Tooltip />
                </div>
                <Button onClick={() => deleteNode()}>Delete</Button>
              </div>
              <div id="addEdge">
                <div className="flex-row head">
                  <h3>Add edge</h3>
                  <Tooltip />
                </div>
                <Button onClick={() => addEdge()}>Add</Button>
              </div>
              <AdjacencyImportForm />
            </div>
          ) : (
            <div className={'page'} id="algorithms">
              <div>
                <Button onClick={() => clearGraphAlgs()}>
                  <h3>Clear</h3>
                </Button>
                <Button onClick={() => kruskal()}>
                  <h3>Minimum Spanning Tree</h3>
                </Button>
                <Button onClick={() => null}>
                  <h3>Cut Vertices</h3>
                </Button>
                <Button onClick={() => bfs()}>
                  <h3>Breadth First Search</h3>
                </Button>
                <Button onClick={() => dfs()}>
                  <h3>Depth First Search</h3>
                </Button>
                <Button onClick={() => complete(5)}>
                  <h3>Complete n=5</h3>
                </Button>
                <Button onClick={() => star(10)}>
                  <h3>Star v=1</h3>
                </Button>
                <Button onClick={() => cycle(10)}>
                  <h3>Cycle v=10</h3>
                </Button>
                <Button onClick={() => completeBipartite(5, 3)}>
                  <h3>Bipartite m = 5 n = 3</h3>
                </Button>
                <Button onClick={() => wheel(10)}>
                  <h3>Wheel n=10</h3>
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
