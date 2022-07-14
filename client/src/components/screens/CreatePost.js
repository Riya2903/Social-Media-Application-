import React from 'react'

const CreatePost = ()=>{
  return(
        <div className="card input-filled"
         style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"25px",
           textAlign:"center"
         }}>

          <input type= "text" placeholder="title" />
          <input type= "text" placeholder="body" />
          <div className="file-field input-field">
          <div className="btn">
              <span>Upload</span>
              <input type="file" />
           </div>
          <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
          </div>
          </div>
          <button className = "waves-effect waves-light btn #00bfa5 teal accent-4" type= "submit" name= "action">Submit post
          </button>



         </div>




  )
}




export default CreatePost
