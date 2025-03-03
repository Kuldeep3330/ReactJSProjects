import React, { useState } from 'react'
import Title from './Title'

const RandomizeColor = () => {
    const[bgColor, setBgColor]=useState("#ffffff")
    
    const handleClick=()=>{
        // console.log("clicked");
       let get_color= getRandomColor()
    //    console.log(get_color);
    //    document.body.style.backgroundColor=get_color 
    setBgColor(get_color)       
    }
    
    function getRandomColor()
    {
        let letters="0123456789ABCDEF"
        let color="#"
        for( let i=0; i<6;  i++)
        {
            color+=letters[Math.floor(Math.random()*16)]
        }
        return color
    }
  return (
    <div className='container m-auto text-center' style={{backgroundColor:bgColor,  padding: "20px", borderRadius: "10px"}}>
        <Title text="Randomize color" classes="mb-4"/>
        <button style={{backgroundColor:bgColor, border:"2px solid black"}} className='btn btn-danger' onClick={handleClick}>click me</button>
        {/* <button className='btn btn-success' onClick={handleClick}>click me</button>
        <button className='btn btn-primary' onClick={handleClick}>click me</button>
        <button className='btn btn-warning' onClick={handleClick}>click me</button> */}

    </div>
  )
}

export default RandomizeColor