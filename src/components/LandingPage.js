import React from 'react'
import './LandingPage.css'

function LandingPage({ sidemenu, setSideMenu }) { 


  const button = (
    <div className="explore-btn-wraper">
        <button onClick={() => setSideMenu(1)} className="explore-btn">Explore</button>
        </div>
  )


  return (
    <div className="wrapper">
      <div className="toggle-wraper">
        {/* <Toggle /> */}
      </div>
      {
      (sidemenu !== 1 && sidemenu !== 2) ? button : ''
      }
      
      <div className="LandingPage">
        <div className="wooden-text">
          <div>HELLO YOU,</div>
          <div className="small">This is ABISH</div>
          <div className="skills">MERN stack Developer</div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
