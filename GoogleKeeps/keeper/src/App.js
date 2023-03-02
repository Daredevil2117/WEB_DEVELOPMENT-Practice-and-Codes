import { useState } from "react";
import Header from "./components/Header";
import Enter from "./components/Enter";
import Note from "./components/Note";

function App() {
   const [allItems , setAllItems] = useState([])
   console.log(allItems)
   const data = allItems.map((item,i)=>{
                return(
                 <Note key={i} title={item.title} desc={item.desc}/>
                )
                })
  return (
    <div>
       <Header/>
       <Enter allItems={allItems} setAllItems={setAllItems}/>
       <div>
         {data}
       </div>
    </div>
  );
}

export default App;
