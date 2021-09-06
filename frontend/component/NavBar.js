import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.jpg"
function NavBar() {
    return (
        <>
        <div className="Nav">
            <img src={logo} width="160" height="70" class="d-inline-block align-top" alt="logo"/>
           <bars/>
            
  
    <div className="NavMenu">
    
      <li className="NavLink">
          
        <NavLink className="NavLink" to="/">Home</NavLink>
      </li>
      <li className="NavLink">
        <NavLink className="NavLink" to="/about">About</NavLink>
      </li>
      <li className="NavLink">
        <NavLink className="NavLink" to="/contact">Contact</NavLink>
      </li>
      
      <li className="NavLink">
        <NavLink className="NavLink" to="/signup">Registration</NavLink>
      </li>
      </div>
      
      <div className="NavBtn">
        <NavLink className="navBtnLink" to="/login">Login</NavLink>
      </div>
    
   
      
 
</div>
        </>
    )
}

export default NavBar
