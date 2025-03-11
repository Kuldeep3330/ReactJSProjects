import React from 'react'
import './SliderComponent.css'

const SliderComponent = ({setValue, handleInput, bgColor, textColor}) => {
  return (
    <div className='container d-flex flex-column' style={{gap:100}}>
        <input type="range" id="slider" min={0} max={100} value={setValue} onInput={handleInput} style={{
            appearance:'none',
            width:'100%',
            height:'50px',
            background:'lightgray',
            course:'pointer',
            opacity:0.7,
            borderRadius:'10px',
            outline:'none'

        }}/>
        <div style={{
            color: !textColor ? "black":textColor,
            background:bgColor,
            height:`${setValue*3}px`,
            width:`${setValue*3}px`,
            fontWeight:600,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:'50%'
        }}>
            <span>{setValue}</span>
        </div>
    </div>
  )
}

export default SliderComponent