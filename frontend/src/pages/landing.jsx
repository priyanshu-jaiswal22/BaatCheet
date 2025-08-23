import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';
export default function LandingPage() {

  
  const navigate = useNavigate();
  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navlist'>
          <p onClick={() => {
            navigate("/q23d4r2");
          }}> Join as Guest</p>
          <p onClick={() => {
              navigate("/auth")

          }}> Register</p>
          <div onClick={() => {
              navigate("/auth")

          }} role='button'>
            <p> Login</p>
          </div>
        </div>
      </nav>


      <div className="landingMainContainer">
        <div>
          <h1>BaatCheet</h1>
        </div>
        <div>
          <p> Stay connected with instant chat, video calls, file sharing, polls, and secure groups.</p>
        </div>
        <button className="btn" onClick={() => navigate("/auth")}>
          Get Started
        </button>
        
      </div>


      <div className="cardContainer">
        <div className="card">
          <p>icon</p>
          <h3>Real-Time Chat</h3>
          <p>Send instant messages,images,and files.</p>
        </div>
        <div className="card">
          <p>icon</p>
          <h3>Live Video Calls</h3>
          <p>Connect face-to-face with HD video calls.</p>
        </div>
        <div className="card">
          <p>icon</p>
          <h3>Secure Groups</h3>
          <p>Create private chat groups with passwords.</p>
        </div>
        <div className="card">
          <p>icon</p>
          <h3>Real-Time Chat</h3>
          <p>Send instant messages,images,and files.</p>
        </div>
        <div className="card">
          <p>icon</p>
          <h3>Real-Time Chat</h3>
          <p>Send instant messages,images,and files.</p>
        </div>
        <div className="card">
          <p>icon</p>
          
          <h3>Real-Time Chat</h3>
          <p>Send instant messages,images,and files.</p>
        </div>
      </div>

    </div>
  )
}
