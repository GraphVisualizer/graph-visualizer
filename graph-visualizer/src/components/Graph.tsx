import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'
import React, { useEffect, useRef } from 'react'

import style from './style'

interface GraphProps {
  elements: cytoscape.ElementDefinition[]
}

const App: React.FunctionComponent<GraphProps> = ({ elements }: GraphProps) => {
  const container = useRef<HTMLDivElement>(null)
  const graph = useRef<cytoscape.Core>()
  const layout = useRef<cytoscape.Layouts>()

  useEffect(() => {
    if (graph.current) {
      if (layout.current) {
        layout.current.stop()
      }
      graph.current.add(elements)
      layout.current = graph.current.elements().makeLayout({
        name: 'cola',
      })
      layout.current.run()
    }
  }, [elements])

  useEffect(() => {
    if (!container.current) {
      return
    }
    try {
      if (!graph.current) {
        cytoscape.use(cola)
        graph.current = cytoscape({
          elements,
          style,
          maxZoom: 1,
          wheelSensitivity: 0.2,
          container: container.current,
        })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }

    // eslint-disable-next-line consistent-return
    return () => {
      if (graph.current) graph.current.destroy()
    }
  }, [])

  return <div className="graph" ref={container} />
}

export default App
