import React, { useEffect, useRef } from 'react'

import { useDataStore } from '../store/context'

const App: React.FunctionComponent = () => {
  const container = useRef<HTMLDivElement>(null)
  const store = useDataStore()
  const { graph } = store

  useEffect(() => {
    graph.mount(container.current as HTMLDivElement)
    store.mount = container.current as HTMLDivElement
  }, [])

  return <div className="graph" ref={container} />
}

export default App
