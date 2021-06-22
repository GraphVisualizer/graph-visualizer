import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'
import { v4 as uuidv4 } from 'uuid'

import defaultStyle from './style'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStore() {
  cytoscape.use(cola)

  let edgeFlag = false

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
    }),

    mount: {} as HTMLDivElement,

    resetGraph() {
      this.graph.destroy()
      this.graph = cytoscape({ style: defaultStyle, maxZoom: 1 })
      this.createLayout({
        name: 'cola',
      })
      this.graph.mount(this.mount)
    },

    layout: {} as cytoscape.Layouts,
    createLayout(options: cytoscape.LayoutOptions) {
      this.layout = this.graph.layout(options)
    },
    refreshLayout() {
      this.layout.run()
    },
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
      this.graph
        .elements()
        .layout({
          name: 'random',

          fit: true, // whether to fit to viewport
          padding: 20, // fit padding
          boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
          ready: undefined, // callback on layoutready
          stop: undefined, // callback on layoutstop
        })
        .run()
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
    deleteEdge() {
      this.graph.remove('edge:selected')
    },
    bfs() {
      this.graph.elements().bfs({
        roots: `node:selected`,
        visit: (v, e, u, i, depth) => {
          setTimeout(() => v.addClass('alg'), 1000 * depth)
        },
      })
    },
    complete(n: number) {
      this.resetGraph()
      for (let i = 0; i < n; i += 1) {
        const newNode = uuidv4()
        const connectors = this.graph.nodes()
        this.graph.add({ data: { id: newNode } })
        connectors.forEach((connector) => {
          this.graph.add({ data: { id: uuidv4(), source: connector.id(), target: newNode } })
        })
      }
      this.refreshLayout()
    },
    star(v: number) {
      this.resetGraph()

      const center = uuidv4()
      this.graph.add({ data: { id: center } })

      for (let i = 0; i < v; i += 1) {
        const newLeg = uuidv4()
        this.graph.add({ data: { id: newLeg } })
        this.graph.add({ data: { id: uuidv4(), source: center, target: newLeg } })
      }
      this.refreshLayout()
    },
  }

  store.createLayout({
    name: 'cola',
  })
  store.refreshLayout()

  return store
}

export type TStore = ReturnType<typeof createStore>
