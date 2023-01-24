// promise / async / aswait / fetch 
// 1 promise : 
// 1. success, error, internal error 
// synchorhonous and asynchronous 
// a -> b -> c -> d 
// fetch(url);

const key = 'f7dc8de163b7816813a9f718d326ce4b';
const getWeather=async(city)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.cod!='200'){
        alert("Enter Valid city name")
    }
    else{
        console.log(data)
        displayContent(data)
    }
    return
}


// 0-11
// const arr=['jan','feb','mar']

let buttton = document.getElementById('btn');
buttton.addEventListener('click',()=>{
    const input = document.getElementById('val')
    getWeather(input.value);
})


const displayContent=(data)=>{
    document.getElementById('icon').innerHTML=`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    document.getElementById('tempmaxval').innerHTML=`<h2>${data.main.temp_max} <sup>o</sup></h2>`;
}



