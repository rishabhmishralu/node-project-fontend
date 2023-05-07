import React, { useEffect, useState } from 'react'
import './Pages.css'
const Bollywood = () => {

  const[product,newproduct]=useState([]);
    useEffect(()=>{
        fetch("https://blogmongodb5.onrender.com/bollywood")
        .then((res)=>res.json())
        .then((res)=>{console.log(res)
        newproduct(res)})
        .catch((error)=>console.log(error))
    },[])


  return (
    <div>
      <h1 className='heading-bolly'>Bollywood</h1>
      


{
  product.map((items,index)=>{
    return(
    

<div key={index}>

<div className='bollywood' >
         <div className='bolly' ><h1 style={{textAlign:"center"}}></h1><br /><div className="bolly-response"><img src={items.img} alt="" className='img1'  /><div></div><div className='breif'><h3>{items.title}</h3><p>{}</p></div></div><hr /></div>
            <div className='post'> <h1 style={{textAlign:"center"}}></h1> <br /><div className='toppost'><div><img src={items.pic} alt="" className='postimg' /> <p>{items.name}</p><hr /></div></div> </div>
        </div>
</div>
    )
  })
}

      
        






    </div>
  )
}

export default Bollywood