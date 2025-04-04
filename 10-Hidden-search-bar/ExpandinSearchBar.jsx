import React, { useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const ExpandinSearchBar = () => {
    const[isExpanded, setIsExpanded]= useState(false);
    const inputRef = useRef(null);

    const handleFocus = () => {
        setIsExpanded(true);
      };
    
      const handleBlur = () => {
        if (inputRef.current.value === "") {
          setIsExpanded(false);
        }
      };

      let bgColor = "linear-gradient(135deg, #BD9DE8, #A14BE2)";
      document.body.style.background = bgColor;
      let containerStyle={
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'10px',
        padding:'20px',   
    }
    let searchStyle={
        fontSize: "1.5rem", 
        color: "#555"  
    }
    let inputStyle={
        width: isExpanded ? "250px" : "50px",
        padding: "10px",
        fontSize: "1rem",    
        border: "1px solid #ccc",
        borderRadius: "25px",
        outline: "none",
        transition: "width 0.3s ease-in-out",
    }
  return (
    <div style={containerStyle}>
        <BsSearch style={searchStyle}/>
        <input ref={inputRef} type='text' placeholder='Search...' onFocus={handleFocus} onBlur={handleBlur} style={inputStyle}/>

    </div>
  )
}

export default ExpandinSearchBar