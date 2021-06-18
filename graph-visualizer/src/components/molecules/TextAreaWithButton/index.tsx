import './style.css'

import React, { useState } from 'react'

import Button from '../../atoms/Button'
import TextArea from '../../atoms/TextArea'

interface TextAreaProps {
  onTextSubmit: (val: string) => void
}

const App: React.FunctionComponent<TextAreaProps> = ({ onTextSubmit }: TextAreaProps) => {
  const [textVal, changeTextVal] = useState<string>('')

  return (
    <div>
      <TextArea value={textVal} onChange={changeTextVal} />
      <Button onClick={() => onTextSubmit(textVal)}>Submit</Button>
    </div>
  )
}

export default App
