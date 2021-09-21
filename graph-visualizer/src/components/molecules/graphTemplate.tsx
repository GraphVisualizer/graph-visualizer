import './style.css'

import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'
import React, { useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import layoutOptions from '../../store/layout'
import defaultStyle from '../../store/style'
import Button from '../atoms/Button'

interface GraphTemplateProps {
  elements: cytoscape.ElementDefinition[]
  index: number
}

cytoscape.use(cola)

const GraphTemplate: React.FunctionComponent<GraphTemplateProps> = ({ elements, index }: GraphTemplateProps) => {
  const container = useRef<HTMLDivElement>(null)
  const demo = {
    graph: cytoscape({
      style: defaultStyle,
      layout: { name: 'preset' },
      elements,
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

    addNode() {
      this.graph.add({ data: { id: uuidv4() } })
      this.refreshLayout()
    },

    deleteNode() {
      this.graph.remove('node:selected')
    },

    addEdge() {
      this.graph.nodes().removeListener('click')
      this.graph.nodes().on('click', (event) => {
        const source = this?.graph.$('node:selected').id()

        if (source) {
          const target = event.target.id()
          this.graph.add({ data: { id: uuidv4(), source, target } })
        }

        this.graph.nodes().removeListener('click')
        this.refreshLayout()
      })
    },
  }

  demo.createLayout(layoutOptions.cola)

  demo.refreshLayout()

  const { graph } = demo

  useEffect(() => {
    graph.mount(container.current as HTMLDivElement)
  }, [])

  const funcs = [demo.addNode, demo.deleteNode, demo.addEdge]
  const names = ['Add Node', 'Delete Node', 'Add Edge']

  return (
    <div className="fig">
      {index >= 0 && <Button onClick={funcs[index]}>{names[index]}</Button>}
      <div className="graph" ref={container}></div>
    </div>
  )
}

export default GraphTemplate
