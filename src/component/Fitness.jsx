
import React, { useEffect, useState } from 'react'
import "./Pages.css"
const Fitness = () => {
    const[product,newproduct]=useState([]);
    useEffect(()=>{
        fetch("https://blogmongodb5.onrender.com/fitness")
        .then((res)=>res.json())
        .then((res)=>{console.log(res)
        newproduct(res)})
        .catch((error)=>console.log(error))
    })

  return (
   <>
    <h1 className='heading-fit'>Fitness</h1>
    <div className='fitmain'>
{product.map((item,index)=>{
return(
 

  
       <div className='fitcard' key={index}>
        <img src={item.img} alt="" srcset=""className='fitimg' />
        <br />
        <h2 className='headind-fit-card'>{item.title}</h2>
       </div>
   


)

})}


</div>
   </>

   
  )
}

export default Fitness