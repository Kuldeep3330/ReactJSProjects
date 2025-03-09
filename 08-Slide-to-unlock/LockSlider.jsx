import React from 'react'
import './LockSlider.css'

const LockSlider = ({handleInput, sliderValue, width}) => {
    let slideStyle={
        appearance:'none',
        width: !width?"300px":width,
        height:"50px",        
        background:"rgba(188, 190, 188, .5)",
        outline:"none",
        borderRadius:"25px"
    }
  return (
    <input type="range" className='slider mb-2 border-5' value={sliderValue} style={slideStyle} onInput={handleInput}/>
  )
}

export default LockSlider