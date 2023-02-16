import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function AllLinks() {
  return (
    <div>
        <NavLink to={'/'} style={({isActive})=>{return isActive ? {color:'black'}:{}}}>Home</NavLink><br></br>
        <Link to={'/contact'}>Contact</Link><br></br>
        <Link to={'/about'}>About</Link><br></br>


        <Link to={'/about/desc'}>Desc</Link><br></br>


        <Link to={'/test'}>Test</Link><br></br>
        <Link to={'/test/test1'}>Test1</Link><br></br>
    </div>
  )
}
