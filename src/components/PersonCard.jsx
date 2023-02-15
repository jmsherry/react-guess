import React from 'react'

function PersonCard({name, email}) {
  return (
    <div style={{ border: '3px solid', borderRadius: '1em'}}>
      <h1>{name}</h1>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}

export default PersonCard