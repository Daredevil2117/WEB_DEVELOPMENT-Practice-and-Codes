import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Test1() {
    const data = useOutletContext()
  return (
    <div>
      <h1>I am test-1</h1>
      <h1>{data.name}</h1>
    </div>
  )
}
