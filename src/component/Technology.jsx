import React, { useEffect, useState } from 'react'

const Technology = () => {

    const[product,newproduct]=useState([]);
    useEffect(()=>{
        fetch("https://projectapi-bxwq.onrender.com/technology")
        .then((res)=>res.json())
        .then((res)=>{console.log(res)
        newproduct(res)})
        .catch((error)=>console.log(error))
    })

  return (
    <>
    <h1 className='heading-tech'>Technology</h1>
    <div className='main-tech'>
      
     {
      product.map((item)=>{
        return(
          <div>
            <div className='card-tech'>
              <img src={item.img} alt="" className='techimg'  />
             <h2 className='headind-2-tech'>{item.title}</h2>
             </div>
          
          </div>
        )
      })
    }




    </div></>
  )
}

export default Technology