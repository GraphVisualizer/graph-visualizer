import './style.css'
import './responsive.css'

import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../components/atoms/Button'
import layoutOptions from '../../store/layout'
import defaultStyle from '../../store/style'
import addEdge from './img/addEdge.gif'
import addNode from './img/addNode.gif'
import deleteNode from './img/deleteNode.gif'
import TutorialTemplate from './template'

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <section className="flex-column start">
        <div className="landing">
          <div className="flex-column landing-text">
            <h1>Introducing an easy-to-learn web app to simulate graph algorithms!</h1>
            <p>We are glad you came to check out our website. Go into our app or read our tutorial below!</p>
            <Button name="app-button redirect-desktop">
              <Link to="../App">Check it out!</Link>
            </Button>
          </div>
          <div className="action flex-column">
            <div id="sim">
              <GraphTemplate />
            </div>
            <Button name="app-button redirect-mobile">
              <Link to="../App">Check it out!</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="flex-column intro">
        <h2>What is Graph Visualizer?</h2>
        <p>
          This application helps CS students learn and visualize graphs better. This software allows you to create any
          graph you want and run various algorithms.
        </p>
      </div>
      <TutorialSection />
    </div>
  )
}

const TutorialSection: React.FunctionComponent = () => {
  return (
    <section id="tutorial">
      <TutorialTemplate
        tutorialElementsArray={[
          {
            subheading: 'Adding a Node',
            description:
              'This adds a node in the center. You can select it with your mouse and drag it around—it turns green when selected.',
            img: addNode,
            alt: false,
          },
          {
            subheading: 'Deleting a Node',
            description:
              'Select the node you would like deleted and then click the delete node button. This will erase any edges connected with that node.',
            img: deleteNode,
            alt: true,
          },
          {
            subheading: 'Adding an Edge',
            description:
              'Select the first node, click the add edge button, then click the second node you would like the edge to connect to.',
            img: addEdge,
            alt: false,
          },
        ]}
      />
    </section>
  )
}

cytoscape.use(cola)

const GraphTemplate: React.FunctionComponent = () => {
  const container = useRef<HTMLDivElement>(null)
  const demo = {
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
      zoom: 1,
      maxZoom: 2,
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

  demo.createLayout(layoutOptions.cola)

  demo.refreshLayout()

  const { graph } = demo

  useEffect(() => {
    window.addEventListener('resize', () => {
      demo.graph.fit()
      demo.graph.resize()
      demo.graph.center()
    })
    graph.mount(container.current as HTMLDivElement)
  }, [])

  return <div className="graph" ref={container}></div>
}

export default Home
