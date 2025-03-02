import React, { useState } from 'react'
import Title from './components/Title'

const Ex1 = () => {
  const [name, setName]= useState("")
  const [date, setDate]= useState("")

  const handleChangeName=(e)=>{
    console.log(e.target.value);
    
    setName(e.target.value)
  }
  const handleChangeDate=(e)=>{
    setDate(e.target.value)

  }

  const inputStyle={
    border:"none",
    borderBottom:" 2px dotted",
    outline:"none",
    padding:".35rem 0"
  }
  document.body.style.backgroundColor="#eee"
  return (
    <div className='container text-center'>
      <Title classes="title" text={name}/>
      <Title classes="main-title" text={date}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium libero incidunt rerum commodi iusto qui, similique deserunt ea officia eveniet consequuntur debitis, sunt corporis distinctio cupiditate accusamus aspernatur animi?</p>
      <footer className='d-flex' style={{justifyContent:'space-around', position:'relative', top:'40vh'}}>
      <input type="date" value={date} style={inputStyle} onChange={handleChangeDate} />
      <input type="text" value={name} style={inputStyle} onChange={handleChangeName}/>
      </footer>
      
    </div>
  )
}

export default Ex1