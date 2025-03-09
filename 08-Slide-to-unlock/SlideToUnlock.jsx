import React, { useEffect, useState } from 'react'
import LockSlider from './LockSlider'
import{AiFillUnlock} from 'react-icons/ai'
import home from './img/home.jpg'
import moon from './img/moon.jpg'
import './LockSlider.css'


const SlideToUnlock = () => {
  const[uiProps, setUiProps] =useState({
    uiText:"Unlock screen",
    uiColor:"#eee",
    uiBg:`url(${moon}) center/cover no-repeat`

  })
  const [showLockSlider, setShowLockSlider]= useState(true)
  const [lockSliderValue, setLockSliderValue] = useState(0)
  const handleLockSliderInput=(e)=>{
    setLockSliderValue(e.target.value)
    // console.log(e.target.value);
    // setShowLockSlider(false);
    
  };

  const lockScreen=()=>{
    setLockSliderValue(0)
    setShowLockSlider(true)
    setUiProps({
      uiText:"Unlock screen",
      uiColor:"#eee",
      uiBg:`url(${home}) center/cover no-repeat`
  
    })
    }

    useEffect(()=>{
      document.body.style.background='#999'
      if(lockSliderValue==='100')
      {
        setShowLockSlider(false)
        setLockSliderValue(0)
        setUiProps({
          uiText:"Lock screen",
          uiColor:"#222",
          uiBg:`url(${moon}) center/cover no-repeat`
      
        })
      }
    },[lockSliderValue])


  return (
    <div className='container text-center d-flex flex-column border-20 shadow-md '
    style={{
      height:"70vh",
      marginTop:"15vh",
      width:340,
      border:"4px solid #000",
      background:uiProps.uiBg
    }}
    >
      <h1 className="title" style={{color: uiProps.uiColor}}>{uiProps.uiText}</h1>
      {showLockSlider?(<LockSlider width="250px" value={lockSliderValue} handleInput={handleLockSliderInput}/>):
      (<AiFillUnlock className='unlockIcon' onClick={lockScreen }/>)}
    </div>
  )
}

export default SlideToUnlock