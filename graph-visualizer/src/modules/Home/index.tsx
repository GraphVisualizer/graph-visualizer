import './style.css'

import React from 'react'

import GraphTemplate from '../../components/molecules/graphTemplate'
import TutorialTemplate from './template'

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <section className="flex-column start">
        <div className="flex-row landing">
          <div className="flex-column landing-text">
            <h1>Welcome</h1>
            <p>We are glad you came to check out our app.</p>
          </div>
          <div id="sim">
            <GraphTemplate
              elements={[
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
              ]}
            />
          </div>
        </div>
        <div className="action flex-row">
          <p>Check out our app or read our tutorial below!</p>
          <button>
            <a href="../App">Check it out!</a>
          </button>
        </div>
      </section>
      <div className="flex-column intro">
        <h2>What is Graph Visualizer?</h2>
        <p>
          This application is to help CS students learn and visualize graphs better. This software allows you to create
          any graph you want and run various algorithms.
        </p>
      </div>
      <section className="tutorial">
        <TutorialSection />
      </section>
    </div>
  )
}

const TutorialSection: React.FunctionComponent = () => {
  return (
    <TutorialTemplate
      tutorialElementsArray={[
        {
          subheading: 'Adding a Node',
          description:
            'This adds a node in the center. You can select it with your mouse and drag it around—it turns green when selected.',
          elements: [{ data: { id: 'a' } }],
          alt: false,
        },
        {
          subheading: 'Deleting a Node',
          description:
            'Select the node you would like deleted and then click the delete node button. This will erase any edges connected with that node.',
          elements: [{ data: { id: 'a' } }],
          alt: true,
        },
        {
          subheading: 'Adding an Edge',
          description:
            'Select the first node, click the add edge button, then click the second node you would like the edge to connect to.',
          elements: [{ data: { id: 'a' } }, { data: { id: 'b' } }],
          alt: false,
        },
        {
          subheading: 'Inputting Custom Graph',
          description:
            'Type into the input box following the pattern shown to the right and press submit. Your custom graph will then be shown along with a confirmation alert.',
          elements: [{ data: {} }],
          alt: true,
        },
      ]}
    />
  )
}

export default Home
