import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'
import React, { useEffect, useRef } from 'react'

import style from './style'

interface GraphProps {
  newElement: cytoscape.ElementDefinition
  delElement: string
  setSelectedElem: React.Dispatch<React.SetStateAction<string>>
}

const App: React.FunctionComponent<GraphProps> = ({ newElement, delElement, setSelectedElem }: GraphProps) => {
  const container = useRef<HTMLDivElement>(null)
  const graph = useRef<cytoscape.Core>()
  const layout = useRef<cytoscape.Layouts>()

  useEffect(() => {
    if (graph.current) {
      if (layout.current) {
        layout.current.stop()
      }

      graph.current.add(newElement).on('tap', (evt) => {
        graph.current?.$('.selected').removeClass('selected')
        setSelectedElem(evt.target.id())
        evt.target.addClass('selected')
      })

      layout.current = graph.current.elements().makeLayout({
        name: 'cola',
      })
      layout.current.run()
    }
  }, [newElement])

  useEffect(() => {
    if (graph.current) {
      if (layout.current) {
        layout.current.stop()
      }

      graph.current.$id(delElement).remove()

      layout.current = graph.current.elements().makeLayout({
        name: 'cola',
      })
      layout.current.run()
    }
  }, [delElement])

  useEffect(() => {
    if (!container.current) {
      return
    }
    try {
      if (!graph.current) {
        cytoscape.use(cola)
        graph.current = cytoscape({
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
