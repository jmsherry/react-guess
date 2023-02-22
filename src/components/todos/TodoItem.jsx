import React from 'react'

function TodoItem({ todo:{ title }, deleteFn=() => {} }) {
  // console.log('d', deleteFn)
  return (
    <li>{title}{" "} <button onClick={deleteFn}>&times;</button></li>
  )
}

export default TodoItem

