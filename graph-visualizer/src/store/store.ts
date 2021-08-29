import cytoscape from 'cytoscape'
import cola from 'cytoscape-cola'
import { v4 as uuidv4 } from 'uuid'

import layoutOptions from './layout'
import defaultStyle from './style'

cytoscape.use(cola)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStore() {
  const store = {
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
          // edge ab
          data: { id: 'ab', source: 'a', target: 'b' },
        },
      ],
      maxZoom: 1,
    }),
    resetGraph() {
      this.graph.elements().remove()
    },

    clearGraphAlgs() {
      this.graph.nodes().removeClass('alg')
    },

    layout: {} as cytoscape.Layouts,
    createLayout(options: cytoscape.LayoutOptions) {
      this.layout = this.graph.layout(options)
    },
    refreshLayout() {
      this.layout.stop()
      this.layout = this.graph.elements().makeLayout(layoutOptions.cola)
      this.layout.run()
    },

    addNode(id: string) {
      this.graph.add({ data: { id } })
      this.refreshLayout()
    },
    addEdge() {
      this.graph.nodes().removeListener('click')
      this.graph.nodes().on('click', (event) => {
        const source = this?.graph.$('node:selected').id()
        const target = event.target.id()
        this.graph.add({ data: { id: uuidv4(), source, target } })
        this.graph.nodes().removeListener('click')
        this.refreshLayout()
      })
    },
    deleteNode() {
      this.graph.remove('node:selected')
    },
    deleteEdge() {
      this.graph.remove('edge:selected')
    },
    cutVertices() {
      const ht = this.graph.elements().htbc()
      ht.cut.addClass('alg')
    },
    bfs() {
      this.graph.elements().bfs({
        roots: `node:selected`,
        visit: (v, e, u, i, depth) => {
          setTimeout(() => v.addClass('alg'), 1000 * depth)
        },
      })
    },
    dfs() {
      this.graph.elements().dfs({
        roots: `node:selected`,
        visit: (v, e, u, i, depth) => {
          setTimeout(() => v.addClass('alg'), 1000 * depth)
        },
      })
    },
    dijkstra() {
      const source = this.graph?.$(`node:selected`).id()
      const dijkstra = this.graph.elements().dijkstra({
        root: `#${source}`,
      })

      this.graph.nodes().removeListener('click')
      this.graph.nodes().on('click', (event) => {
        const destination = event.target.id()
        const pathFromSource = dijkstra.pathTo(this.graph?.$(`#${destination}`))
        const nodeCollection = pathFromSource.map((ele) => this.graph?.$(`#${ele.id()}`))
        nodeCollection.forEach((node, i) => setTimeout(() => node.addClass('alg'), 500 * (i + 1)))

        this.graph.nodes().removeListener('click')
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

    cycle(v: number) {
      this.resetGraph()

      const start = uuidv4()
      let back = start
      this.graph.add({ data: { id: start } })

      for (let i = 0; i < v - 1; i += 1) {
        const newLeg = uuidv4()
        this.graph.add({ data: { id: newLeg } })
        this.graph.add({ data: { id: uuidv4(), source: back, target: newLeg } })
        back = newLeg
      }
      this.graph.add({ data: { id: uuidv4(), source: back, target: start } })
      this.refreshLayout()
    },

    completeBipartite(m: number, n: number) {
      this.resetGraph()

      const set = []
      for (let i = 0; i < m; i += 1) {
        const newNode = uuidv4()
        set.push(newNode)
        this.graph.add({ data: { id: newNode } })
      }

      for (let i = 0; i < n; i += 1) {
        const newNode = uuidv4()
        this.graph.add({ data: { id: newNode } })

        set.forEach((node) => {
          this.graph.add({ data: { id: uuidv4(), source: newNode, target: node } })
        })
      }
      this.refreshLayout()
    },

    wheel(n: number) {
      this.resetGraph()

      if (n === 0) return

      const center = uuidv4()
      this.graph.add({ data: { id: center } })

      let initLeg = ''
      let prevLeg = ''
      for (let i = 0; i < n - 1; i += 1) {
        const newLeg = uuidv4()
        if (i === 0) initLeg = newLeg
        this.graph.add({ data: { id: newLeg } })
        this.graph.add({ data: { id: uuidv4(), source: center, target: newLeg } })
        if (prevLeg) this.graph.add({ data: { id: uuidv4(), source: prevLeg, target: newLeg } })
        prevLeg = newLeg
        if (i === n - 2) this.graph.add({ data: { id: uuidv4(), source: newLeg, target: initLeg } })
      }

      this.refreshLayout()
    },

    async kruskal() {
      const nodes = this.graph.nodes()
      const edges = this.graph.edges()
      const numNodes = nodes.length
      const forest: cytoscape.NodeSingular[] = new Array(numNodes)
      const A: cytoscape.CollectionReturnValue = this.graph.collection() // assumes byGroup() creates new collections that can be safely mutated

      A.merge(nodes)

      A.addClass('alg')

      const findSetIndex = (ele: cytoscape.NodeSingular) => {
        for (let i = 0; i < forest.length; i += 1) {
          const eles = forest[i]

          if (eles.has(ele)) {
            return i
          }
        }

        return -1
      }

      // start with one forest per node
      for (let i = 0; i < numNodes; i += 1) {
        forest[i] = nodes[i]
      }

      for (let i = 0; i < edges.length; i += 1) {
        setTimeout(() => {
          const edge = edges[i]
          const u = edge.source()
          const v = edge.target()
          const setUIndex = findSetIndex(u)
          const setVIndex = findSetIndex(v)
          const setU = forest[setUIndex]
          const setV = forest[setVIndex]

          if (setUIndex !== setVIndex) {
            A.merge(edge)

            A.addClass('alg')

            // combine forests for u and v
            setU.merge(setV)
            forest.splice(setVIndex, 1)
          }
        }, 1000 * i)
        // doesn't work correctly so far since timeout needs to happen in if section
      }

      return A
    },

    prim() {
      const A: cytoscape.CollectionReturnValue = this.graph.collection()

      this.graph.elements().breadthFirstSearch({
        root: this.graph.nodes()[0],
        visit: (v, e, u, i, depth) => {
          setTimeout(() => {
            if (!A.contains(v)) {
              A.merge(v)
              A.merge(e)
            }
            A.addClass('alg')
          }, 1000 * depth)
        },
      })

      return A
    },
  }

  store.createLayout(layoutOptions.cola)

  store.refreshLayout()

  return store
}

export type TStore = ReturnType<typeof createStore>
