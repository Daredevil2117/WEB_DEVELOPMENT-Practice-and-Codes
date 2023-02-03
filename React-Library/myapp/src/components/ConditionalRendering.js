import React from 'react'

export default function ConditionalRendering(props) {
    const params= props.params
    const firstName = params.firstName

  return (
    firstName &&
    <div className='container'>
        <p>Length of string is {firstName.length}</p>
        {firstName.length>9?<span>Long String</span>: <span>Short String</span>}
        {firstName && <h1>Hello World</h1>}
    </div>
  )
}
