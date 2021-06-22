import './Button.css'

import React from 'react'

interface ButtonProps {
  innerText: string | React.ReactElement
  action: () => void
}

const Button = ({ innerText, action }: ButtonProps) => {
  return <button onClick={action}>{innerText}</button>
}

export default Button
