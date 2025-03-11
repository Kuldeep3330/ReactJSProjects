import React from 'react'

const Button = ({text="click", btnClass, onClick}) => {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>{text}</button>
    // <button className={`btn ${btnClass}`} >{text}</button>
    
  )
}

export default Button