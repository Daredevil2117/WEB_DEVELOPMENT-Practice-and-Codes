import React from 'react'

export default function Main(props) {
    const setLoginUser = props.setLoginUser

    
    return (
        <div class="card container" >
            <div class="card-body">
                <h5 class="card-title">Welcome To Home Page</h5>
                <p class="card-text">You can only see this page when you are logged in </p>
                <button className='btn btn-danger' onClick={()=>setLoginUser({})}>Log Out </button>
            </div>
        </div>
    )
}
