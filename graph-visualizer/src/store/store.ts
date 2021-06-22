import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'
import { v4 as uuidv4 } from 'uuid'

import defaultStyle from './style'

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
  let edgeFlag = false

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
    addNode() {
      this.graph.add({ data: { id: uuidv4() } }).on('tap', (event) => {
        if (edgeFlag) {
          const sourceId = this.graph?.$('.selected').id()
          this.graph?.$('.selected').removeClass('selected')
          this.graph.add({ data: { id: uuidv4(), source: sourceId, target: event.target.id() } })
          edgeFlag = !edgeFlag
        } else {
          this.graph?.$('.selected').removeClass('selected')
          this.graph.elements().forEach((elem) => {
            if (elem.id() === event.target.id()) elem.addClass('selected')
          })
        }
      })
      this.graph.elements().layout(options).run()
    },
    addEdge() {
      edgeFlag = !edgeFlag
    },
    deleteNode() {
      const sourceId = this.graph?.$('.selected').id()
      this.graph?.$('.selected').removeClass('selected')
      this.graph.elements().forEach((elem) => {
        if (elem.id() === sourceId) this.graph.remove(elem)
      })

    },
    destroyGraph() {
      this.graph.destroy()
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
