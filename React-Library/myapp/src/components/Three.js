import React, { useState } from 'react'
import Four from './Four'

export default function Three() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setisChecked] = useState(false);
    const [error, setError] = useState("");
    const [abc, abc2] = useState(true);

    const [params, setParams] = useState({
        name1:"",
        password1:"",
        isChecked1:false
    })

    const handleName=(event)=>{

        setName(event.target.value)
        setParams({...params,name1:event.target.value})
    }

    const handlePassword=(event)=>{
        setPassword(event.target.value)
        setParams({...params,password1:event.target.value})

    }

    // const handleChjeckBox=()=>{
    //     setisChecked(!isChecked)
    // }
    console.log(params.name1)
    console.log(password)
    console.log(isChecked)
  return (
    <>
    <div>
        <form className='container'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" value={name}
                onChange={handleName} />        
            </div>
            <div>{error}</div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="text" className="form-control" id="exampleInputPassword1" onChange={handlePassword}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"
                checked={isChecked} onChange={()=>setisChecked(!isChecked)}/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
    </div>
    <Four/>
     </>
  )
}
