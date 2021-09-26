import './style.css'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Button from '../../components/atoms/Button'
import Graph from '../../components/Graph'
import AdjacencyImportForm from '../../components/organisms/AdjacencyImportForm'
import { DataStoreProvider, useDataStore } from '../../store/context'

const App: React.FunctionComponent = () => {
  const store = useDataStore()

  const {
    addNode,
    addEdge,
    deleteNode,
    resetGraph,
    dijkstra,
    cutVertices,
    clearGraphAlgs,
    bfs,
    dfs,
    complete,
    star,
    wheel,
    completeBipartite,
    cycle,
    kruskal,
    prim,
  } = store

  const [isAlgTabOn, setIsAlgTabOn] = useState(false)

  return (
    <div className="App">
      <div className="main flex-row">
        <div className="flex-column main-visual">
          <div className="flex-row fns">
            <Button onClick={() => resetGraph()}>Clear Graph</Button>
            <Button onClick={() => addNode(uuidv4())}>Add Node</Button>
            <Button onClick={() => deleteNode()}>Delete Node</Button>
            <Button onClick={() => addEdge()}>Add Edge</Button>
          </div>
          <section className="visual">
            <Graph />
          </section>
        </div>
        <section className="interface flex-column">
          <div className="tabs">
            <span>
              <Button name={isAlgTabOn ? 'activeTab' : 'inactiveTab'} onClick={() => setIsAlgTabOn(false)}>
                Templates
              </Button>
            </span>
            <span>
              <Button name={!isAlgTabOn ? 'activeTab' : 'inactiveTab'} onClick={() => setIsAlgTabOn(true)}>
                Algorithms
              </Button>
            </span>
          </div>
          <div className="buttons">
            {!isAlgTabOn ? (
              <div className="page flex-column" id="presets">
                <h4 className="button-subheading">Preset Graphs</h4>
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
                <h4 className="button-subheading">Custom Graph</h4>
                <AdjacencyImportForm />
              </div>
            ) : (
              <div className={'page'} id="algorithms">
                <div>
                  <Button onClick={() => clearGraphAlgs()}>
                    <h3>Clear</h3>
                  </Button>
                  <h4 className="button-subheading">Minimum Spanning Tree</h4>
                  <Button onClick={() => kruskal()}>
                    <h3>Kruskal</h3>
                  </Button>
                  <Button onClick={() => prim()}>
                    <h3>Prim</h3>
                  </Button>
                  <h4 className="button-subheading">Connected Components</h4>
                  <Button onClick={() => cutVertices()}>
                    <h3>Cut Vertices</h3>
                  </Button>
                  <h4 className="button-subheading">Search Algorithms</h4>
                  <Button onClick={() => bfs()}>
                    <h3>Breadth First Search</h3>
                  </Button>
                  <Button onClick={() => dfs()}>
                    <h3>Depth First Search</h3>
                  </Button>
                  <h4 className="button-subheading">Shortest Path Algorithm</h4>
                  <Button onClick={() => dijkstra()}>
                    <h3>Dijkstra</h3>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
const AppModule: React.FunctionComponent = () => {
  return (
    <DataStoreProvider>
      <App />
    </DataStoreProvider>
  )
}

export default AppModule
