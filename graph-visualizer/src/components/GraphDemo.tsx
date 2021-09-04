import React, { useEffect, useRef } from 'react'

import { useDataStoreDemo } from '../store/contextDemo'

const App: React.FunctionComponent = () => {
  const container = useRef<HTMLDivElement>(null)
  const store = useDataStoreDemo()
  const { graph } = store

  useEffect(() => {
    graph.mount(container.current as HTMLDivElement)
  }, [])

  return <div className="graph" ref={container} />
}

export default App
