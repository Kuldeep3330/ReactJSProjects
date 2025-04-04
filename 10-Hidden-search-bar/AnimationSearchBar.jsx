import React, { useEffect, useRef, useState } from 'react'
import './AnimationSearchBar.css'
import { BsSearch } from 'react-icons/bs'

const AnimationSearchBar = () => {
    const[expanded, setExpanded] = useState(false);  
    const inputRef=useRef(null)

      const handleExpand=()=>{
        setExpanded(true)
    }
    useEffect(()=>{
        const handleClick=(event)=>{
            if(inputRef.current && !inputRef.current.contains(event.target))
                {
                    setExpanded(false)
                }
        }
        document.addEventListener('click', handleClick)
        return ()=> document.removeEventListener('click', handleClick)
    },[]) 
  return (
    <div className={`search-container ${expanded ? "expanded" : ""}`} onClick={handleExpand}>
        <BsSearch className='search-icon'/>
        <p>building Search bar</p>
        <input ref={inputRef} type='text' placeholder='Search...' className='search-input' />
    </div>
  )
}

export default AnimationSearchBar