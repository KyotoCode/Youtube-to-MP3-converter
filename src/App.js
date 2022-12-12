import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
// import youtubedl from 'youtube-dl-exec'



function App() {

  const [value, valueSet] = useState('')
  const [link, setLink] = useState()
  console.log(link)

  let a = value
  let b = a.substring(32, 43)
  console.log(b)


  const setValue = (e) =>{
    e.preventDefault()
    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: {id: b},
      headers: {
        'X-RapidAPI-Key': '2768744a56mshaf660bf4ca7aba0p1c177fjsn2dd3c9b6f9d4',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      }
    };
    axios.request(options)
    .then(res => {
      console.log(res.data.link)
      setLink(res.data.link)
    }).catch(err => {
      console.log(err)
    })
    console.log(value)
    if(value.length < 40){
      alert("Please insert valid link.")
    }
  }

  return (

    <div className="App">
      <div className='mg'>
      <h1>JLMP3 - Conventer</h1>
    <form onSubmit={setValue}>
      <input value={value} onChange={(e) => valueSet(e.target.value)}/>
      <button type='submit'>Send</button> 
    </form>
    {link !== undefined && <a href={link}>DOWNLOAD</a>}
    </div>
    </div>
  );
}
export default App;


