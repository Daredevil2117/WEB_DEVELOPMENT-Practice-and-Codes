import React, { useState } from 'react'

export default function Enter(props) {
    const allItems = props.allItems
    const setAllItems = props.setAllItems
    const [note , setNote] = useState({
        title:"",
        desc:""
    })
    const handleChange=(e)=>{
        const {name,value} = e.target
        setNote({...note , [name]:value })
    }

    console.log(note)

    const addNote=()=>{
        setNote({
            title:"",
            desc:""
        })

        setAllItems([...allItems,note])
    }
  return (
    <div>
       <input
        type="text"
        name="title" 
        placeholder='Enter Titile'
        value={note.title}
        onChange={handleChange}
         />
        
        <textarea
        name="desc"
        rows="3"
        placeholder='Take a note ...'
        value={note.desc}
        onChange={handleChange}
        >
        </textarea>
        <button onClick={addNote}>Add Note</button>
    </div>
  )
}
