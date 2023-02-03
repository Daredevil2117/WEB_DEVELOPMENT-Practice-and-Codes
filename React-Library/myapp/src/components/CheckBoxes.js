import React, { useState } from 'react'
import { DataItems } from './DataItem'

export default function CheckBoxes() {
    const len = DataItems.length
    const arr=[]
    for(var i=0;i<len;i++){
        arr.push(false)
    }
    const [boxes , setBoxes] = useState(arr)
    const handleCheckBoxes=(pos)=>{
        setBoxes(boxes.map((item,index)=>
         index==pos?!item:item
        ))
    }
    console.log(boxes)
  return (
    <div className='container'>

        { 
          DataItems.map((item,index)=>(
          <p>  
            <input
            type="checkbox"
            value={item.name}
            checked={boxes[index]}
            onChange={()=>handleCheckBoxes(index)}
            />
            <label>{item.name}</label>
          </p>  
        ))}
      
    </div>
  )
}
