import React from 'react'

import Hollywood from './Hollywood'


const Home = () => {
  return (
    <div>
      <h1 className='heading-home'>Home</h1>
      <div>
      <img src="https://img.myloview.com/posters/closeup-shot-of-a-couple-enjoying-the-view-of-manali-mountains-himachal-pradesh-700-208471545.jpg" alt="" srcset="" className='home-img' /> 

      </div>
      <div className='home-card'>
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPvMv0Ml0J3mz130ahFn__b-E-uZEcw61n86Scb1AIB-A0X9jx8hMj1nwEcsgWyvKzZ3dhfvGQ2da1jfvR4mS3wA" alt="" className='img-home' />
        <img src="https://static.toiimg.com/photo/msid-87726041,width-96,height-65.cms" alt="" className='img-home' />

        <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQMrL1SHFbwJTZsBWYDQ80PQOULm_zt1gOwmlXzRqjWbbfbSC57-60MJaDlO5PJuTuIrMwOWz-aTdypOW0T_Lsy2A" alt="" className='img-home' />
      </div>
      <Hollywood/>
   
     
    </div>
  )
}

export default Home