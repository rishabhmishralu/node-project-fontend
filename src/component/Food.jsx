import React, { useEffect, useState } from 'react'
import "./Pages.css"
const Food = () => {

  const[product,newproduct]=useState([]);
    useEffect(()=>{
        fetch("https://blogmongodb5.onrender.com/food")
        .then((res)=>res.json())
        .then((res)=>{console.log(res)
        newproduct(res)})
        .catch((error)=>console.log(error))
    })

   
 
    
    
    
  return (
    <>
    <h1 className='heading-food'>FooD</h1>
    <div className='food-flex'>

      
  {
    product.map((item,index)=>{
      return(
       
          <div className='main-1' key={index}>

         <div className='box-1'><img src={item.img} alt="404" className='img1'/><h4 className='heading-box-1'>{item.title}</h4></div>
  
       </div>  
       
      )
    })
  }

    </div>
    </>
  )
}

export default Food