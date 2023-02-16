// import { useState } from "react";
// import LiftingOne from "./components/LiftingOne";
// import LiftingTwo from "./components/LiftingTwo";
// import Three from "./components/Three";
// import ConditionalRendering from "./components/ConditionalRendering";
// import CheckBoxes from "./components/CheckBoxes";
import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "./components/Sections/Home";
import Contact from "./components/Sections/Contact";
import About from "./components/Sections/About";
import AllLinks from "./components/Sections/AllLinks";
import Desc from "./components/Sections/Desc";
import Test1 from "./components/Sections/Test1";
import Test from "./components/Sections/Test";
import Combine from "./components/Sections/Combine";


function App() {

  // const [firstName, updateName] = useState("")

  // const [params, updateParams] = useState({

  //   firstName:"",
  //   lastName:""

  // })

  // const params={
  //   firstName:"",
  //   lastName:""
  // }
  // console.log(firstName)

  // console.log(params)

  const route = useRoutes([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'*',
      element:<h1>Page Not Found</h1>
    }
  ])

  return (
        //  {/* <Three/> */}
        //  {/* <LiftingOne  first={firstName} update={updateName}/> */}
        //  {/* <LiftingTwo first={firstName}/> */}

        //  /* <LiftingOne params={params} update={updateParams} />
        //  <LiftingTwo params={params}/>
        //  <ConditionalRendering params={params}/>
        //  <CheckBoxes/> */
      <>
      <AllLinks/>
      {route}
      <Routes>
             
             {/* single path routes  */}
{/* 
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/about" element={<About/>}></Route> */}

           {/* multi path routes  */}

            {/* <Route path="/about/desc" element={<Desc/>}></Route> */}

            {/* common path routes  */}



            {/* <Route path="/test" element={<Combine/>}>
              <Route  index element={<Test/>}></Route>
              <Route path="test1" element={<Test1/>}></Route>
            </Route>

            <Route path="*" element={<h1>Page Not Found</h1>}></Route> */}
      </Routes>
      </>
       
               
 
  );
}


export default App;
