import React, { useState } from 'react'
import Button from './Button'

const TemperatureController = () => {
    const [temp, setTemp]= useState(0)

  return (
    <div className='container mt-3 text-center'>
        <div className="card bg-light m-auto" style={{width:200}}>
            <h1 className={`text-light card border-50 ${temp>0?"bg-danger":"bg-info"}`} style={{
                height:150,
                width:150,
                borderRadius:"2px solid #666"
            }}>{temp} ° F</h1>
            <div className='d-flex my-2'>
            <Button text='-' btnClass="btn-lg" onClick={()=>setTemp(prev=>prev-1)}></Button>
            <Button text='+' btnClass="btn-lg" onClick={()=>setTemp(prev=>prev+1)}></Button>
            </div>
        </div>
        </div>
  )
}

export default TemperatureController