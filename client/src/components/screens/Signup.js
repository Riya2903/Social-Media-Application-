import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signup = ()=>{
	const history = useHistory()
	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const [DOB,setDOB] = useState("")
	const PostData = ()=>{
		fetch("http://localhost:5000/signup",
		 {method:"post", headers:{"Content-Type":"application/json"},body:JSON.stringify({name,
		 	email,
		 	password,
		 	DOB })
		 }).then(res=>res.json())
		.then(data=>{

			if(data.error){
				 M.toast({html: data.error,classes:"#e53935 red darken-1"})
			}
			else{
					M.toast({html:data.message,classes:"#43a047 green darken-1"})
					history.push('/Signin')
			}
		})
	}
  return(
    <div className = "mycard">
<div className = "card auth-card">
<h2>SMAP</h2>
<input
type = "text"
placeholder = "name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
<input
type = "email"
placeholder = "email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<input
type = "text"
placeholder = "password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<input
type="date"
placeholder = "DOB"
value={DOB}
onChange={(e)=>setDOB(e.target.value)}
/>
<button className = "waves-effect waves-light btn #e53935 red darken-1" onClick={()=>PostData()}>Sign up
</button>
<h6>
<Link to = "/Signin">Already a user?</Link></h6>
</div>
    </div>
  )
}



export default Signup
