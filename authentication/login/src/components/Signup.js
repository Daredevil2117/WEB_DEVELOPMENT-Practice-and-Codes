import React, { useState } from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"



export default function Signup() {
    const history = useHistory()
   
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
  
   const handleSignup=()=>{
    const {name, email,password,confirmPassword } = user
    if(name && email && password && (password===confirmPassword)){
        axios.post("http://localhost:9000/signup" , user)
        .then(res=>{
            alert(res.data.message)
            history.push('/login')
        })
    }
    else{
        alert("Invalid Parameters")
    }


   }
  
    
   
  return (
    <div className='container'>
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
    <button className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
    <div>Already a Member ?</div>
    <button className="btn btn-primary" onClick={()=>history.push("/login")}>Log In</button>
</div>
  )
}
