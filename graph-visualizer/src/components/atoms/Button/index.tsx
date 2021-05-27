import './style.css'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

const App: React.FunctionComponent<ButtonProps> = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}

export default App
