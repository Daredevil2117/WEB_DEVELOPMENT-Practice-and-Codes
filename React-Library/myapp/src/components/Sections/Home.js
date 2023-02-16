import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    const handleClick=()=>{
        navigate('/contact')
    }
  return (
    <div>
      <h1>I am Home</h1>
      <p onClick={handleClick}>Contact</p>
    </div>
  )
}
