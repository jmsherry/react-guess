import React from 'react'

function Slots({ title, term, definition  }) {
  return (
    <div>
      <h1>{title}</h1>
      <dl>
        <dt>{term}</dt>
        <dd><p>{definition}</p></dd>
      </dl>
    </div>
  )
}

export default Slots