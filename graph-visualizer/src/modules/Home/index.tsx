import './style.css'

import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'
import React, { useEffect, useRef } from 'react'

import layoutOptions from '../../store/layout'
import defaultStyle from '../../store/style'

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
            <Graph />
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

const TutorialSection: React.FunctionComponent = () => {
  return (
    <div className="flex-row top">
      <section className="flex-column">
        <h3>Subheading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </section>
      <div className="fig"></div>
    </div>
  )
}

const TutorialSectionAlt: React.FunctionComponent = () => {
  return (
    <div className="flex-row top alt">
      <div className="fig"></div>
      <section className="flex-column">
        <h3>Subheading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </section>
    </div>
  )
}

cytoscape.use(cola)

const Graph: React.FunctionComponent = () => {
  const container = useRef<HTMLDivElement>(null)
  const graphDemo = {
    graph: cytoscape({
      style: defaultStyle,
      layout: { name: 'preset' },
      elements: [
        {
          data: { id: 'a' },
        },
        {
          data: { id: 'b' },
        },
        {
          data: { id: 'c' },
        },
        {
          data: { id: 'd' },
        },
        {
          data: { id: 'e' },
        },
        {
          data: { id: 'ab', source: 'a', target: 'b' },
        },
        {
          data: { id: 'bc', source: 'b', target: 'c' },
        },
        {
          data: { id: 'ac', source: 'c', target: 'a' },
        },
        {
          data: { id: 'ad', source: 'd', target: 'a' },
        },
        {
          data: { id: 'de', source: 'd', target: 'e' },
        },
      ],
      maxZoom: 1,
      userZoomingEnabled: false,
      userPanningEnabled: false,
    }),

    layout: {} as cytoscape.Layouts,
    createLayout(options: cytoscape.LayoutOptions) {
      this.layout = this.graph.layout(options)
    },

    refreshLayout() {
      this.layout.stop()
      this.layout = this.graph.elements().makeLayout(layoutOptions.cola)
      this.layout.run()
    },
  }

  graphDemo.createLayout(layoutOptions.cola)

  graphDemo.refreshLayout()

  const { graph } = graphDemo

  useEffect(() => {
    graph.mount(container.current as HTMLDivElement)
  }, [])

  return <div className="graph" ref={container} />
}

export default Home
