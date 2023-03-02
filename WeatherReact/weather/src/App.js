import React, { useEffect, useState } from 'react'

function App() {
  const [check , setCheck] = useState('')
  const [data, setData] = useState([])
  // https://api.openweathermap.org/data/2.5/weather?q=London&appid=9a969a294776b5f59046ceb9909544de

  const getData = async ()=>{
   const response= await fetch("https://api.covid19api.com/summary")

   const item = await response.json()
   setData(item.Countries)
  }
  useEffect(()=>{
     getData()
  },[])

  function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

let country = "";
  if(data.length!==0){
    console.log('hii')
    console.log(data)
    country = getRandomItem(data)
    console.log(country.Country)
    
   

  }

  console.log(check)
  
 


  return (
    <>
     <input type='text' value={check} onChange={(e)=>setCheck(e.target.value)}></input>
    {/* {data.map((item)=>{
      return(
        <div>{item.Country}</div>
      )
    })} */}
    <div>{country.Country}</div>
    </>
  );
}

export default App;
