import './App.css'

import React, { useState } from 'react'

import Button from './components/atoms/Button'
import Graph from './components/Graph'
import Tooltip from './components/Tooltip'
import { useDataStore } from './store/context'

export type AlgAction = 'kruskal' | 'karger' | 'djikstra' | 'bfs' | 'dfs' | ''

const App: React.FunctionComponent = () => {
  const store = useDataStore()
  const { addNode, addEdge, deleteNode, destroyGraph, listenForClick } = store

  const [isGenTabHidden, setHiddenGenTab] = useState(false)
  const [isAlgTabHidden, setHiddenAlgTab] = useState(true)
  const [isGraphCleared, setIsGraphCleared] = useState(false)

  const [algActions, setAlgActions] = useState<AlgAction>('')

  const toggleTabs = () => {
    setHiddenGenTab(!isGenTabHidden)
    setHiddenAlgTab(!isAlgTabHidden)
  }

  const clearGraph = () => {
    if (!isGraphCleared) destroyGraph()
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
        <section className="visual" onClick={listenForClick}>
          <Graph />
        </section>
        <section className="interface flex-column">
          <div className="tabs">
            <span>General</span>
            <span>Algorithms</span>
            <Button action={toggleTabs} innerText="Toggle" />
          </div>
          <div className={isGenTabHidden ? 'page hide' : 'page'} id="general">
            <button onClick={clearGraph}>Clear</button>
            <div id="addNode">
              <div className="flex-row head">
                <h3>Add node</h3>
                <Tooltip />
              </div>
              <Button action={() => addNode()} innerText="Add" />
            </div>
            <div id="delNode">
              <div className="flex-row head">
                <h3>Delete node</h3>
                <Tooltip />
              </div>
              <Button action={() => deleteNode()} innerText="Delete" />
            </div>
            <div id="addEdge">
              <div className="flex-row head">
                <h3>Add edge</h3>
                <Tooltip />
              </div>
              <Button action={() => addEdge()} innerText="Add" />
            </div>
          </div>
          <div className={isAlgTabHidden ? 'page hide' : 'page'} id="algorithms">
            <div>
              <Button
                action={() => setAlgActions('kruskal')}
                innerText={((<h3>Minimum Spanning Tree</h3>) as unknown) as Element}
              />
              <Button
                action={() => setAlgActions('karger')}
                innerText={((<h3>Cut Vertices</h3>) as unknown) as Element}
              />
              <Button
                action={() => setAlgActions('bfs')}
                innerText={((<h3>Breadth First Search</h3>) as unknown) as Element}
              />
              <Button
                action={() => setAlgActions('dfs')}
                innerText={((<h3>Depth First Search</h3>) as unknown) as Element}
              />
              <Button action={() => setAlgActions('')} innerText={((<h3>Clear</h3>) as unknown) as Element} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
