import React from 'react'
const Home = ()=>{
  return(
    <div className="home">
      <div className="card home-card">
          <h5>ria</h5>
          <div className="card-image">
            <img src="https://www.bing.com/th?id=OIP.ZTITedEnP2qvlUs8Om0CxwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>
          </div>
          <div className="card-content">
            <i className="material-icons" style={{color:"red"}}>favorite</i>
              <h6>title</h6>
              <p>Hey there</p>
              <input type="text" placeholder="add a comment" />
          </div>
      </div>
      <div className="card home-card">
          <h5>ria</h5>
          <div className="card-image">
            <img src="https://th.bing.com/th/id/OIP.UJO6KtwGoCXUY1OaRro6wQHaLp?w=182&h=286&c=7&r=0&o=5&dpr=1.25&pid=1.7"/>
          </div>
          <div className="card-content">
            <i className="material-icons" style={{color:"red"}}>favorite</i>
              <h6>title</h6>
              <p>Hey there</p>
              <input type="text" placeholder="add a comment" />
          </div>
      </div>
      <div className="card home-card">
          <h5>ria</h5>
          <div className="card-image">
            <img src="https://i.pinimg.com/736x/74/bf/a8/74bfa849a1700305ae459238caba3779.jpg"/>
          </div>
          <div className="card-content">
            <i className="material-icons" style={{color:"red"}}>favorite</i>
              <h6>title</h6>
              <p>Hey there</p>
              <input type="text" placeholder="add a comment" />
          </div>
      </div>

    </div>
  )
}

export default Home
