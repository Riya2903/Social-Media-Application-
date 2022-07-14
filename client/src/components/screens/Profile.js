import React from 'react'
const Profile = ()=>{
  return(
    <div> style={{maxWidth:"550px", margin:"0px auto"}}
      <div style={{
          display:"flex",
          justifyContent:"space-around",
          margin:"20px 0px",
          borderBottom:"1px solid grey"
        }}>

        <div>
            <img style={{width:"160px",height:"160px",borderRadius:"40px"}}
              src="https://images.unsplash.com/photo-1622656584355-6eeb25fb4ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div>
           <h5>ria</h5>
           <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                 <h6> 3 posts</h6>
                 <h6> 20 followers</h6>
                 <h6> 20 following</h6>
            </div>
        </div>
       </div>
     <div className="gallery">
       <img className="item" src="https://images.unsplash.com/photo-1622656584355-6eeb25fb4ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
       <img className="item" src="https://images.unsplash.com/photo-1622656584355-6eeb25fb4ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
       <img className="item" src="https://images.unsplash.com/photo-1622656584355-6eeb25fb4ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
       <img className="item" src= "https://images.unsplash.com/photo-1622656584355-6eeb25fb4ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

      </div>

  </div>
  )
}

export default Profile
