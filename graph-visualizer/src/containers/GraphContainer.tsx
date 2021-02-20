import { shuffle } from 'lodash'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Graph from '../components/Graph'

const originalElements = [
  {
    data: {
      id: 'node-1',
      generation: 0,
    },
  },
  {
    data: {
      id: 'node-2',
      generation: 0,
    },
  },
  {
    data: {
      id: 'edge-1',
      source: 'node-1',
      target: 'node-2',
      generation: 0,
    },
  },
]

const GraphContainer: React.FunctionComponent = () => {
  const [elements, setElements] = useState(originalElements)
  const [generation, setGeneration] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newGeneration = generation + 1
      const randomNode = shuffle(elements).find((element) => !element.data.source)
      const newNode = {
        data: {
          id: `node-${uuidv4()}`,
          generation: newGeneration,
        },
      }
      setElements([
        ...elements,
        newNode,
        {
          data: {
            id: `edge-${uuidv4()}`,
            source: (randomNode && randomNode.data.id) || '',
            target: newNode.data.id,
            generation: newGeneration,
          },
        },
      ])
      setGeneration(newGeneration)
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })

  return <Graph elements={elements.filter((element) => element.data.generation === generation)} />
}

export default GraphContainer
