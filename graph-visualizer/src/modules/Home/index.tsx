import './style.css'

import React from 'react'

import Graph from '../../components/GraphDemo'
import { DataStoreProvider } from '../../store/contextDemo'
import TutorialSection from './TutorialSection'
// eslint-disable-next-line import/no-unresolved
import TutorialSectionAlt from './TutorialSectionAlt'

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <section className="flex-column start">
        <div className="flex-row landing">
          <div className="flex-column landing-text">
            <h1>Welcome</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div id="sim">
            <DataStoreProvider>
              <Graph />
            </DataStoreProvider>
          </div>
        </div>
        <div className="action flex-row">
          <p>Check out our app or read our tutorial below!</p>
          <button>Check it out!</button>
        </div>
      </section>
      <div className="flex-column intro">
        <h2>What is Graph Visualizer?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <section className="tutorial">
        <TutorialSection />
        <TutorialSectionAlt />
        <TutorialSection />
        <TutorialSectionAlt />
      </section>
    </div>
  )
}

export default Home
