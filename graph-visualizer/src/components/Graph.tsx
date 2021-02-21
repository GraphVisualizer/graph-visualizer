import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'
import React, { useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { AlgAction, ElemAction } from '../App'
import style from './style'

interface GraphProps {
  elemActions: ElemAction
  setElemActions: React.Dispatch<React.SetStateAction<ElemAction>>
  algActions: AlgAction
}

const App: React.FunctionComponent<GraphProps> = ({ elemActions, setElemActions, algActions }: GraphProps) => {
  const container = useRef<HTMLDivElement>(null)
  const graph = useRef<cytoscape.Core>()
  const layout = useRef<cytoscape.Layouts>()

  const destroyGraph = () => {
    if (graph.current) {
      graph.current.destroy()

      cytoscape.use(cola)
      graph.current = cytoscape({
        style,
        maxZoom: 1,
        wheelSensitivity: 0.2,
        container: container.current,
      })
    }
  }

  useEffect(() => {
    if (graph.current && (elemActions.add || elemActions.delete || elemActions.source || elemActions.destroy)) {
      if (layout.current) {
        layout.current.stop()
      }

      const newActions = elemActions

      if (elemActions.delete !== '') {
        graph.current.$id(elemActions.delete).remove()
        newActions.delete = ''
      }

      if (elemActions.add !== '') {
        graph.current.add({ data: { id: elemActions.add } }).on('tap', (evt) => {
          graph.current?.$('.selected').removeClass('selected')
          evt.target.addClass('selected')

          const source = graph.current?.$('.source')
          if (!source?.empty()) {
            if (layout.current) {
              layout.current.stop()
            }

            graph.current?.add({
              group: 'edges',
              data: { id: `edge-${uuidv4()}`, source: source?.id(), target: evt.target.id() },
            })
            source?.removeClass('source')

            layout.current = graph.current?.elements().makeLayout({
              name: 'cola',
            })
            layout.current?.run()
          }

          setElemActions({ ...elemActions, selected: evt.target.id() })
        })
        newActions.add = ''
      }

      if (elemActions.source !== '') {
        graph.current.$id(elemActions.source).addClass('source')
        newActions.source = ''
      }

      if (elemActions.destroy !== '') {
        destroyGraph()
        newActions.destroy = ''
      }

      setElemActions(newActions)
      layout.current = graph.current.elements().makeLayout({
        name: 'cola',
      })
      layout.current.run()
    }
  }, [elemActions.delete, elemActions.add, elemActions.source, elemActions.destroy])

  useEffect(() => {
    if (graph.current) {
      if (layout.current) {
        layout.current.stop()
      }

      graph.current.elements().removeClass('alg')

      if (algActions === 'kruskal') {
        graph.current
          .elements()
          .kruskal(() => 1)
          .addClass('alg')
      }

      if (algActions === 'prim') {
        // graph.current
        //   .elements()
        //   .kruskal(() => 1)
        //   .addClass('alg')
      }

      if (algActions === 'djikstra') {
        // graph.current
        //   .elements()
        //   .kruskal(() => 1)
        //   .addClass('alg')
      }

      layout.current = graph.current.elements().makeLayout({
        name: 'cola',
      })
      layout.current.run()
    }
  }, [algActions])

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
