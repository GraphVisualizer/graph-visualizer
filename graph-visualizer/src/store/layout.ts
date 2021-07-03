export default {
  cola: {
    name: 'cola',
    padding: 50,
    nodeSpacing: 12,
    edgeLengthVal: 45,
    animate: true,
    randomize: true,
    maxSimulationTime: 1500,
    boundingBox: {
      // to give cola more space to resolve initial overlaps
      x1: 0,
      y1: 0,
      x2: 10000,
      y2: 10000,
    },
    edgeLength(e: cytoscape.EdgeSingular) {
      let w = e.data('weight')

      if (w == null) {
        w = 0.5
      }

      return 45 / w
    },
  } as cytoscape.LayoutOptions,
}
