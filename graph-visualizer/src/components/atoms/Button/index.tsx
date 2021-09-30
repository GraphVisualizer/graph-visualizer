import './style.css'

import React from 'react'

interface ButtonProps {
  name?: string
  children: React.ReactNode
  onClick: () => void
}

const App: React.FunctionComponent<ButtonProps> = ({ name, children, onClick }: ButtonProps) => {
  return (
    <button className={name} onClick={onClick}>
      {children}
    </button>
  )
}

export default App
