import React, { useEffect, useState } from 'react'
import Title from './Title'
import Button from './Button'
import { BsFillFileEarmarkPostFill, BsTypeH2 } from "react-icons/bs";
import {FaUserAlt } from "react-icons/fa";
import {BiCommentDetail } from "react-icons/bi";

const Testimonial = () => {

    const[testimonial, setTestimonial]= useState("")
    const [items, setItems]=useState();

    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/${testimonial}`) 
       .then(res=>res.json())
       .then(data=>setItems(data)
       )

    },[testimonial])
    const handleClick=()=>{
        console.log("my click");
        

    }
  return (
    <div>
        <Title text="Testimonial App"/>
       
        <Button text="Posts" btnClass="btn-info" icon={<BsFillFileEarmarkPostFill/>} onClick={()=>setTestimonial("Posts")}/>
        <Button text="Users" btnClass="btn-info" icon={<FaUserAlt/>} onClick={()=>setTestimonial("Users")}/>
        <Button text="Comments" btnClass="btn-info" icon={<BiCommentDetail/>} onClick={()=>setTestimonial("Comments")}/>
        <Title classes="subtitle text-primary" text={!testimonial?"select from above":testimonial}/>
        {!items?null: items.map((item)=>{
            return(
                <div className="card card-primary mb-2" key={item.id}>
                    {item.name && <h2 className='card-header'>{item.name}</h2>}
                    <div className='card-body'>
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>

                        </div>
                        {item.email&& <small className='card-footer'>{item.email}</small> }
                    </div>
            )
        })}
    </div>
  )
}

export default Testimonial