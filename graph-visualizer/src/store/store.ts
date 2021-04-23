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
    listenForClick() {
      this.graph.on('tap', 'node', (event) => {
        this.graph?.$('.selected').removeClass('selected')
        event.target.addClass('selected')
      })
    },
    addNode() {
      this.graph.add({ data: { id: uuidv4() } }).on('tap', (event) => {
        this.graph?.$('.selected').removeClass('selected')
        event.target.addClass('selected')
        this.graph.center(event.target)
      })
    },
    addEdge() {
      this.graph.on('tap', 'node', (event) => {
        this.graph?.$('.selected').removeClass('selected')
        event.target.addClass('selected')
        const sourceId = this.graph?.$('.selected').id()
        this.graph.on('tap', 'node', (evt) => {
          this.graph?.$('.selected').removeClass('selected')
          evt.target.addClass('selected')
          const targetId = evt.target.addClass('selected').id()
          this.graph.add({ data: { id: uuidv4(), source: sourceId, target: targetId } })
        })
      })
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
