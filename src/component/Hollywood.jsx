import "./Pages.css"
import React, { useEffect, useState } from 'react'
const Hollywood = () => {
    const[product,newproduct]=useState([]);
    useEffect(()=>{
        fetch("https://blogmongodb5.onrender.com/hollywood")
        .then((res)=>res.json())
        .then((res)=>{console.log(res)
        newproduct(res)})
        .catch((error)=>console.log(error))
    })

  return (
    <> <h1 className="heading-holly">Hollywood</h1>
    <div className="main-holly">
     
   {
    product.map((item,index)=>{
      return(
     
        <div key={index}><img src={item.img} alt="404" width="30%" className='hollyimg' /><h3>{item.title}</h3></div>



      )
    })
   }
    </div>
</>
  )
}

export default Hollywood