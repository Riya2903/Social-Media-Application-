import React from 'react'
import {Link} from 'react-router-dom'
const Signin = ()=>{
  return(
    <div className = "mycard">
<div className = "card auth-card">
<h2>SMAP</h2>
<input
type = "text"
placeholder = "email"
/>
<input
type = "text"
placeholder = "password"
/>
<button className = "waves-effect waves-light btn #00bfa5 teal accent-4" type= "submit" name= "action">Sign in
</button>
<h6>
<Link to = "/Signup">New here?</Link></h6>
</div>
    </div>
  )
}



export default Signin
