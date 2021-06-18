import './style.css'

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useDataStore } from '../../../store/context'
import TextAreaWithButton from '../../molecules/TextAreaWithButton'

const App: React.FunctionComponent = () => {
  const store = useDataStore()

  const [formValue, changeFormValue] = useState<string>('')

  useEffect(() => {
    if (formValue === '') return

    try {
      const lines = formValue.split('\n')

      const initValues = lines[0].split(' ')
      const nodes = Number(initValues[0])
      const edges = Number(initValues[1])

      const nodeList = new Map<string, string>()

      // for now, ignore the node names
      const nodeNames = lines[1].split(' ')
      for (let i = 0; i < nodes; i += 1) {
        const name = uuidv4()
        nodeList.set(nodeNames[i], name)
        store.addNode(name)
      }

      for (let i = 0; i < edges; i += 1) {
        const edge = lines[2 + i].split(' ')
        store.addEdge(nodeList.get(edge[0]) as string, nodeList.get(edge[1]) as string)
      }

      // eslint-disable-next-line no-alert
      alert(`Graph of ${nodes} nodes and ${edges} edges successfully added.`)

      store.refreshLayout()
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(`Invalid input: ${error}`)
    }
  }, [formValue])

  return (
    <div>
      <TextAreaWithButton onTextSubmit={changeFormValue} />
    </div>
  )
}

export default App
