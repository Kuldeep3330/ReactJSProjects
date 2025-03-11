import React, { useState } from 'react'
import SliderComponent from './SliderComponent'
import Title from './Title'

const Slider = () => {
  const [slideValue, setSlideValue]= useState(0);

  document.body.style.background= "#f1f1f1"

  const handleSlider=(e)=>{
      setSlideValue(e.target.value)
  }
  let bgColor;
  let textColor;

  if(slideValue<25)
  {
    bgColor="red";
    textColor="black";
  }
  if(slideValue>25 && slideValue<=50)
  {
    bgColor="blue";
    textColor="white"
  }
  if(slideValue>50 && slideValue<=75)
    {
      bgColor="yellow";
      textColor="red"
    }
    if(slideValue>75 && slideValue<=100)
    {
      bgColor="orange";
      textColor="green"
    }

  return (
    <div className='container text-center'>
      <Title text="Slide To Grow"/>
      <SliderComponent setValue={slideValue} handleInput={handleSlider} bgColor={bgColor} textColor={textColor}/>
    </div>
  )
}

export default Slider