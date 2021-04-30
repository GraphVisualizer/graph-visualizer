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
              <Button action={() => setIsAlgTabOn(false)} innerText="General" />
            </span>
            <span>
              <Button action={() => setIsAlgTabOn(true)} innerText="Algorithms" />
            </span>
          </div>
          {isAlgTabOn ? (
            <div className={'page'} id="general">
              <button onClick={() => null}>Clear</button>
              <div id="addNode">
                <div className="flex-row head">
                  <h3>Add node</h3>
                  <Tooltip />
                </div>
                <Button action={() => null} innerText="Add" />
              </div>
              <div id="delNode">
                <div className="flex-row head">
                  <h3>Delete node</h3>
                  <Tooltip />
                </div>
                <Button action={() => null} innerText="Delete" />
              </div>
              <div id="addEdge">
                <div className="flex-row head">
                  <h3>Add edge</h3>
                  <Tooltip />
                </div>
                <Button action={() => null} innerText="Add" />
              </div>
            </div>
          ) : (
            <div className={'page'} id="algorithms">
              <div>
                <Button action={() => null} innerText={(<h3>Minimum Spanning Tree</h3>) as React.ReactElement} />
                <Button action={() => null} innerText={(<h3>Cut Vertices</h3>) as React.ReactElement} />
                <Button action={() => null} innerText={(<h3>Breadth First Search</h3>) as React.ReactElement} />
                <Button action={() => null} innerText={(<h3>Depth First Search</h3>) as React.ReactElement} />
                <Button action={() => null} innerText={(<h3>Clear</h3>) as React.ReactElement} />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
