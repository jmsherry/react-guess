import React from 'react'

function Button({text, handler}) {
  return (
    <button onClick={handler}>{text}</button>
  )
}

export default Button