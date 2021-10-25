import './style.css'
import './responsive.css'

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useDataStore } from '../../../store/context'
import Button from '../../atoms/Button'
import TextArea from '../../atoms/TextArea'

const App: React.FunctionComponent = () => {
  const store = useDataStore()

  const [formValue, changeFormValue] = useState<string>('')
  const [textVal, changeTextVal] = useState<string>('')

  useEffect(() => {
    if (formValue === '') return

    try {
      const lines = formValue.split('\n')

      const initValues = lines[0].split(' ')
      const nodes = Number(initValues[0])
      const edges = Number(initValues[1])

      const nodeList = new Map<string, string>()
      const edgeList: Array<[string, string]> = []

      // for now, ignore the node names
      const nodeNames = lines[1].split(' ')
      for (let i = 0; i < nodes; i += 1) {
        const name = uuidv4()
        nodeList.set(nodeNames[i], name)
      }

      for (let i = 0; i < edges; i += 1) {
        const edge = lines[2 + i].split(' ')
        edgeList.push([edge[0], edge[1]])
      }

      nodeList.forEach((val) => {
        store.graph.add({ data: { id: val } })
      })
      edgeList.forEach((edge) => {
        store.graph.add({ data: { id: uuidv4(), source: nodeList.get(edge[0]), target: nodeList.get(edge[1]) } })
      })

      // eslint-disable-next-line no-alert
      alert(`Graph of ${nodes} nodes and ${edges} edges successfully added.`)

      store.refreshLayout()
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(`Invalid input: ${error}`)
    }
  }, [formValue])

  return (
    <div id="import-form">
      <TextArea value={textVal} onChange={changeTextVal} />
      <Button onClick={() => changeFormValue(textVal)}>Submit</Button>
    </div>
  )
}

export default App
