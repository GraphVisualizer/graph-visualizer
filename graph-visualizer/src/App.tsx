import './App.css'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Button from './components/atoms/Button'
import Graph from './components/Graph'
import Tooltip from './components/Tooltip'

export interface ElemAction {
  selected: string
  add: string
  delete: string
  source: string
  destroy: string
}

export type AlgAction = 'kruskal' | 'karger' | 'djikstra' | 'bfs' | 'dfs' | ''

const App: React.FunctionComponent = () => {
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
        <section className="visual">
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
              <Button action={addNode} innerText="Add" />
            </div>
            <div id="delNode">
              <div className="flex-row head">
                <h3>Delete node</h3>
                <Tooltip />
              </div>
              <Button action={delNode} innerText="Delete" />
            </div>
            <div id="addEdge">
              <div className="flex-row head">
                <h3>Add edge</h3>
                <Tooltip />
              </div>
              <Button action={addEdge} innerText="Add" />
            </div>
          </div>
          <div className={isAlgTabHidden ? 'page hide' : 'page'} id="algorithms">
            <div>
              <Button
                action={() => setAlgActions('kruskal')}
                innerText={(<h3>Minimum Spanning Tree</h3>) as React.ReactElement}
              />
              <Button
                action={() => setAlgActions('karger')}
                innerText={(<h3>Cut Vertices</h3>) as React.ReactElement}
              />
              <Button
                action={() => setAlgActions('bfs')}
                innerText={(<h3>Breadth First Search</h3>) as React.ReactElement}
              />
              <Button
                action={() => setAlgActions('dfs')}
                innerText={(<h3>Depth First Search</h3>) as React.ReactElement}
              />
              <Button action={() => setAlgActions('')} innerText={(<h3>Clear</h3>) as React.ReactElement} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
