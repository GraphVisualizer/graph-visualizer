import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'
import { v4 as uuidv4 } from 'uuid'

import defaultStyle from './style'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStore() {
  cytoscape.use(cola)

  const store = {
    graph: cytoscape({
      style: defaultStyle,
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
          // edge ab
          data: { id: 'ab', source: 'a', target: 'b' },
        },
      ],
      maxZoom: 1,
      wheelSensitivity: 0.2,
    }),

    layout: {} as cytoscape.Layouts,
    createLayout(options: cytoscape.LayoutOptions) {
      this.layout = this.graph.layout(options)
    },
    refreshLayout() {
      this.layout.run()
    },
    addNode(item: string) {
      this.graph.add({ data: { id: item } })
    },
    addEdge(e1: string, e2: string) {
      this.graph.add({ data: { id: uuidv4(), source: e1, target: e2 } })
    },
    bfs() {
      this.graph.elements().bfs({
        roots: `#elemActions.selected`,
        visit: (v, e, u, i, depth) => {
          setTimeout(() => v.addClass('alg'), 1000 * depth)
        },
      })
    },
  }

  store.createLayout({
    name: 'cola',
  })
  store.refreshLayout()

  return store
}

export type TStore = ReturnType<typeof createStore>
