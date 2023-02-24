import React, { useState } from 'react'

export default function Login() {
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
    return (
        <form className='container'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={user.email} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                name="password" value={user.password} onChange={handleOnChange}/>
            </div>
            <button className="btn btn-primary">Log In </button>
        </form>
    )
}
