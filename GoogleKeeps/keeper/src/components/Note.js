import React from 'react'

export default function Note(props) {
    // const [show , setShow] = useState(false)
  return (
    <div class="card" >

        {/* {show && <p>delete</p>} */}
        <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.desc}</p>
        </div>
  </div>
  )
}
