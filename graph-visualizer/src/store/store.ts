import cytoscape from 'cytoscape'
import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStore() {
  return {
    graph: cytoscape({
      elements: [],
      style: [
        {
          selector: 'node',
          style: { content: 'data(id)' },
        },
      ],
      maxZoom: 1,
      wheelSensitivity: 0.2,
    }),
    addNode() {
      this.graph.add({ data: { id: uuidv4() } }).on('tap', (event) => {
        this.graph?.$('.selected').removeClass('selected')
        event.target.addClass('selected')
      })
    },
    addEdge() {
      // TODO
      /*
      this.graph.on('tap', (event) => {
        this.graph.add({ data: { id: uuidv4(), source: this.graph?.$('.selected').id(), target: event.target.id() } })
      })
      */
    },
    deleteNode() {
      this.graph.remove(this.graph?.$('.selected').id())
    },
    destroyGraph() {
      this.graph.destroy()
    },
  }
}

export type TStore = ReturnType<typeof createStore>
