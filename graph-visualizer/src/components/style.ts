import { Stylesheet } from 'cytoscape'

const COLORS = {
  purp: '#43447a',
  green: '#00FF00',
  red: '#FF0000',
}

const nodeStyles = [
  {
    selector: 'node',
    style: {
      'transition-property': 'background-color border-color',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-in-sine',
      'background-color': COLORS.purp,
    },
  },
  {
    selector: '.selected',
    style: {
      'background-color': COLORS.green,
    },
  },
  {
    selector: '.source',
    style: {
      'border-width': '2px',
      'border-style': 'dotted',
    },
  },
  {
    selector: 'node.alg',
    style: {
      'background-color': COLORS.red,
    },
  },
]
const edgeStyles = [
  {
    selector: 'edge',
    style: {
      'curve-style': 'bezier',
      // 'target-arrow-shape': 'triangle',
      // 'target-arrow-color': COLORS.purp,
      'line-color': COLORS.purp,
    },
  },
  {
    selector: 'edge.alg',
    style: {
      'line-color': COLORS.red,
    },
  },
]

export default [...nodeStyles, ...edgeStyles] as Stylesheet[]
