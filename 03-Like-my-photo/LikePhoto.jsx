import React, { useState } from 'react'
import Title from './Title'
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import dog from './image/dog.jpg'
const LikePhoto = () => {
    const[like, setLike]= useState(false)
    const[count, setCount]= useState(0)
    // let like=true;
    const handleLike=()=>{
        setLike(prev=>!prev)
        setCount((prev) => (like ? prev - 1 : prev + 1));
    }

  return (
    <div className='container text-center'>
        <Title  text="LIKE PHOTO APP"/>
        <Title classes="subtitle" text={`Likes: ${count}`}/>
        <div className="card card-dark m-auto shadow-sm" style={{
            width:300,
            cursor:"pointer"
        }} >
            <div className="card-header fs-xl">
                <AiFillSmile className='mr-2'/>
                <small>
                    PoggyPookie
                </small>

            </div>
            <img src={dog} alt="img" style={{height:"fit-content"}} onDoubleClick={handleLike} />
            <div className="card-footer fs-xl d-flex"
            style={{
                justifyContent:"space-between"
            }}  >
                <AiOutlineComment/> <span onClick={handleLike} style={{ cursor: "pointer" }}>
                        {like ? <AiFillHeart className='text-danger' /> : <AiOutlineHeart />}
                    </span></div>
        </div>
        </div>
  )
}

export default LikePhoto