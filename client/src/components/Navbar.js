import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = ()=>{
  return(
    <nav>
   <div className="nav-wrapper teal">
     <Link to="/" className="brand-logo left">SMAP</Link>
     <ul id="nav-mobile" className="right ">
       <li><Link to="/Signin">signin</Link></li>
       <li><Link to="/Signup">Signup</Link></li>
       <li><Link to="/Profile">Profile</Link></li>
       <li><Link to="/CreatePost">CreatePost</Link></li>
     </ul>
   </div>
 </nav>

  )
}

export default NavBar
