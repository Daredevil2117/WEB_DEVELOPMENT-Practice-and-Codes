import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Combine() {
  return (
    <div>
       <h1>I am Combine</h1>
       <Outlet context={{name:"Tejender",age:23}}/>  
    </div>
  )
}
