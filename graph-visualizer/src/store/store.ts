import cytoscape from 'cytoscape'
import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStore() {
  return {
    graph: cytoscape({
      style: [
        {
          selector: 'node',
          style: { content: 'data(id)' },
        },
      ],
      maxZoom: 1,
      wheelSensitivity: 0.2,
    }),
    addNode(item: string) {
      this.graph.add({ data: { id: item } })
    },
    addEdge(e1: string, e2: string) {
      this.graph.add({ data: { id: uuidv4(), source: e1, target: e2 } })
    },
  }
}

export type TStore = ReturnType<typeof createStore>
