import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'

import layoutOptions from './layout'
import defaultStyle from './style'

cytoscape.use(cola)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStoreDemo() {
  const storeDemo = {
    graph: cytoscape({
      style: defaultStyle,
      layout: { name: 'preset' },
      elements: [
        // list of graph elements to start with
        {
          // node a
          data: { id: 'a' },
        },
        {
          // node b
          data: { id: 'b' },
        },
        {
          //  node c
          data: { id: 'c' },
        },
        {
          //  node d
          data: { id: 'd' },
        },
        {
          //  node e
          data: { id: 'e' },
        },
        {
          // edge ab
          data: { id: 'ab', source: 'a', target: 'b' },
        },
        {
          //  edge bc
          data: { id: 'bc', source: 'b', target: 'c' },
        },
        {
          //  edge ac
          data: { id: 'ac', source: 'c', target: 'a' },
        },
        {
          //  edge ad
          data: { id: 'ad', source: 'd', target: 'a' },
        },
        {
          //  edge de
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

  storeDemo.createLayout(layoutOptions.cola)

  storeDemo.refreshLayout()

  return storeDemo
}

export type TStore = ReturnType<typeof createStoreDemo>
