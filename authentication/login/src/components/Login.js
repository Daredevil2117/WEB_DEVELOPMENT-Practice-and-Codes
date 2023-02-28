import React, { useState } from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

export default function Login(props) {
    const setLoginUser=props.setLoginUser
    const history = useHistory()
  
    const [ user , setUser] = useState({
        email:"",
        password:"",
       
    })
    const handleOnChange=(e)=>{
        console.log(e.target)
        const {name , value } = e.target
        setUser({...user,
            [name]:value
        })

    }

    const handleLogin=()=>{
        axios.post("http://localhost:9000/login", user)
        .then(res=>{
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
   
    return (
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={user.email} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                name="password" value={user.password} onChange={handleOnChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>Log In </button>
            <div>Not a Member ?</div>
            <button className="btn btn-primary" onClick={()=>history.push("/signup")}>Signup </button>
        </div>
    )
}
