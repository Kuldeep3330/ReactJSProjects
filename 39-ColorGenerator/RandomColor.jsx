import React, { useState } from 'react'
import './RandomColor.css'

const RandomColor = () => {
    const[color, setColor]= useState('#ffffff')
    const clickHandler = () => {
        const newColor = getColor();
        setColor(newColor);
    };

    const clickHandler_2 = () => {
        const newColor = getRandomRGBA();
        setColor(newColor);
    };
    function getColor()
    {
        const str = "0123456789abcdef";
        let newColor='#'
        for( let i=0; i<6; i++)
        {
            newColor+=str[Math.floor(Math.random()*16)]
        }
        return newColor
        
    }
    function getRandomRGBA() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = Math.random().toFixed(2); // Alpha between 0.00 - 1.00
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    
    // console.log(getRandomRGBA()); 

  return (
    <div className='container' style={{ backgroundColor: color, textAlign: 'center', padding: '20px' }}>
        <h2>Background Color: {color}</h2>
        <button onClick={clickHandler}>Hex Color</button>
        <button onClick={clickHandler_2}>RGBA Color</button>
    </div>
  )
}

export default RandomColor