

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Componet.css"
import {FaBars} from "react-icons/fa"

 

const Nav = () => {

 const[menu,setmenu]=useState(false)
 


const change=(e)=>{
  e.preventDefault(
    setmenu(!menu)
  )
  console.log(menu)
}

  return (
    <div>

        <div className='nav-perent'>

            <ul type='none' className={menu?".bars":"ul"} >
                <NavLink to="/" className="link"><li><h3>Home</h3></li></NavLink>
                <NavLink to="/bollywood" className="link"> <li><h3>Bollywood</h3></li> </NavLink>
                <NavLink to="/technology" className="link"> <li><h3>Technology</h3></li></NavLink>
                <NavLink to="/hollywood" className="link"> <li><h3>Hollywood</h3></li></NavLink>
                <NavLink to="/fitness" className="link"> <li><h3>Fitness</h3></li></NavLink>
               <NavLink to="/food" className="link"> <li><h3>Food</h3></li></NavLink>
              </ul>

        </div>
        <button className='bars' onClick={change}>
       
         <FaBars/>
        </button>
        

    </div>
  )
}

export default Nav;