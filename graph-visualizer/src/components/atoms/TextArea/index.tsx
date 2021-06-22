import './style.css'

import React from 'react'

interface TextAreaProps {
  value: string
  onChange: (val: string) => void
}

const App: React.FunctionComponent<TextAreaProps> = ({ value, onChange }: TextAreaProps) => {
  return <textarea value={value} onChange={(event) => onChange(event.target.value)} />
}

export default App
