// 1. React Dom rule : Everything inside on node ( root node ) (Outer div it will not have sibling )
// Steps : 

// 1. node js install 
// 2. node -v (14>)
// 3. npm -v ()

// 4. create folder ( npx create-react-app) (cd appname , npm start)

// 3. react-app always have root node (root Dom)

// element = <h1>Hello</h1>

// root = ReactDOM.createRoot(rootnode)
// root.render(element)

// * Components =  Part of website (1. class components and function components(hooks) )
// {< Components /> } 

// function components (return())

// styling class = className 

// <h1>Hii</h1>
// <h1>Hello</h1>

// {main component = it will contain all other components 

// root.render(main component)}

// 'use strict'

// 3 JSX ( mixture html + js) ( Javascript syntex extension)

// Use of Fragments (<></>)

// anything in js file of react can be exported ()

// {default : only thing getting exported from a file }

// {to use js inside jsx use curly brackets}
//    const a =  <div>
//                       <h1>Hello World</h1>
//                       <h2>Hello World 2</h2>
//                </div>

import React from 'react'


export default function One() {
    return (
        <>
        {/* <form className='container'>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" />        
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="ptext" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form> */}
        </>
    )
}



// State and Props (properties)


