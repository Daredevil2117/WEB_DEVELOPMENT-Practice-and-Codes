import React from 'react'

export default function Four(props) {
    // const name = props.Name
    // const password = props.Password

    const arrayOfObject = [
        {name:"Tejender", desc:"Mentor"},
        {name:"Abc", desc:"Student"}
    ]
  return (
    <div className='container'>
        {/* {name} {password} */}

        {arrayOfObject.map((item)=>(
            <p>{item.name} is {item.desc}</p>

        ))}
    </div>
  )
}
