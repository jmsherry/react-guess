import React, {useState} from 'react'
import Controls from './Controls'
import Display from './Display'

function Counter() {
  const [value, setter] = useState(0);
  return (
    <>
      <Display value={value} />
      <Controls setter={setter} />
    </>
  )
}

export default Counter