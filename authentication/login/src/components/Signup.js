import React, { useState } from 'react'

export default function Signup() {
    const [ user , setUser] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleOnChange=(e)=>{
        console.log(e.target)
        const {name , value } = e.target
        setUser({...user,
            [name]:value
        })

    }
   
  return (
    <form className='container'>
    <div className="mb-3">
        <label htmlFor="entername" className="form-label">Name</label>
        <input type="text" className="form-control" id="entername" 
        name="name" value={user.name} onChange={handleOnChange}/>
    </div>  
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={user.email} onChange={handleOnChange}/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"
        name="password" value={user.password} onChange={handleOnChange}/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2"
        name="confirmPassword" value={user.confirmPassword} onChange={handleOnChange}/>
    </div>
    <button className="btn btn-primary">Sign Up</button>
</form>
  )
}
