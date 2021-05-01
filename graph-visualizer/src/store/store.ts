import cytoscape from 'cytoscape'
import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStore() {
  const options = {
    name: 'random',

    fit: true, // whether to fit to viewport
    padding: 20, // fit padding
    boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    ready: undefined, // callback on layoutready
    stop: undefined, // callback on layoutstop
  }

  return {
    graph: cytoscape({
      elements: [],
      style: [
        {
          selector: 'node',
          style: {},
        },
      ],
      maxZoom: 1,
      wheelSensitivity: 0.2,
    }),
    listenForClick() {
      // reset event listeners
      this.graph.removeListener('tap')
      this.graph.on('tap', 'node', (event) => {
        this.graph?.$('.selected').removeClass('selected')
        event.target.addClass('selected')
      })
    },
    addNode() {
      // reset event listeners
      this.graph.removeListener('tap')
      this.graph.add({ data: { id: uuidv4() } }).on('tap', 'node', (event) => {
        this.graph?.$('.selected').removeClass('selected')
        event.target.addClass('selected')
      })
      this.graph.elements().layout(options).run()
    },
    addEdge() {
      // reset event listeners
      this.graph.removeListener('tap')
      // get ID of currently selected node
      const sourceId = this.graph?.$('.selected').id()
      // making sure we only add edge if we have a node selected first
      if (sourceId !== undefined) {
        this.graph?.$('.selected').removeClass('selected')
        this.graph.on('tap', 'node', (event) => {
          event.target.addClass('new-edge')
          const newId = this.graph?.$('.new-edge').id()
          this.graph.add({ data: { id: uuidv4(), source: sourceId, target: newId } })
          this.graph?.$('.new-edge').removeClass('new-edge')
        })
      }
    },
    deleteNode() {
      const sourceId = this.graph?.$('.selected').id()
      // making sure we only delete node if we have a node selected first
      if (sourceId !== undefined) this.graph.remove(this.graph?.$('.selected').id())
    },
    destroyGraph() {
      this.graph.destroy()
    },
  }
}

export type TStore = ReturnType<typeof createStore>
