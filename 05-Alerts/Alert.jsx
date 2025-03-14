import React, { useEffect, useState } from 'react'
import Button from './Button'

const Alert = ({type, message, delay=false}) => {
    const[showAlert, setShowAlert]= useState(true)
    const closeAlert=(e)=>{
        e.target.parentElement.parentElement.classList.add("fadeAlert")
        setTimeout(()=>{setShowAlert(false)},400)
    }
    useEffect(()=>{
        delay && setTimeout(()=>{
            setShowAlert(false)
        }, 3000)
    })
  return  (showAlert && <div className={`alert alert-${type}`}>

    <div className='alert-close'>
       <span className='mr-1'>{message}</span> 
       <Button btnClass='btn-close' text='X' onClick={closeAlert}/>
    </div>
    </div>)
  
}

export default Alert