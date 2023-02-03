import { useState } from "react";
import LiftingOne from "./components/LiftingOne";
import LiftingTwo from "./components/LiftingTwo";
import Three from "./components/Three";
import ConditionalRendering from "./components/ConditionalRendering";
import CheckBoxes from "./components/CheckBoxes";


function App() {

  // const [firstName, updateName] = useState("")

  const [params, updateParams] = useState({

    firstName:"",
    lastName:""

  })

  // const params={
  //   firstName:"",
  //   lastName:""
  // }
  // console.log(firstName)

  console.log(params)

  return (
    
 <div>
         <Three/>
         {/* <LiftingOne  first={firstName} update={updateName}/> */}
         {/* <LiftingTwo first={firstName}/> */}

         <LiftingOne params={params} update={updateParams} />
         <LiftingTwo params={params}/>
         <ConditionalRendering params={params}/>
         <CheckBoxes/>
               
 </div>
  );
}


export default App;
