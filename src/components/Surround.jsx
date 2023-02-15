import React from 'react'

function Surround({ children, color='red' }) {
  return (
    <div style={{border: `1px solid ${color}`}}>{children}</div>
  )
}


export default Surround