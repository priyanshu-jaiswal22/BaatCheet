import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';

import ChatIcon from "@mui/icons-material/Chat";
import LockIcon from "@mui/icons-material/Lock";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";


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
          <ChatIcon fontSize="large" className="text-blue-500" />
          <h3>Real-Time Chat</h3>
          <p>Send instant messages,images,and files.</p>
        </div>
        <div className="card">
          <VideocamIcon fontSize="large" className="text-blue-500" />
          <h3>Live Video Calls</h3>
          <p>Connect face-to-face with HD video calls.</p>
        </div>
        <div className="card">
          <LockIcon fontSize="large" className="text-blue-500" />
          <h3>Secure Groups</h3>
          <p>Create private chat groups with passwords.</p>
        </div>
        <div className="card">
          <PersonAddIcon fontSize="large" className="text-blue-500" />
          <h3>Join as Guest</h3>
          <p>No signup required, join meetings instantly.</p>
        </div>
        <div className="card">
          <ScreenShareIcon fontSize="large" className="text-blue-500" />
          <h3>Screen Sharing</h3>
          <p>Share your screen for better collaboration.</p>
        </div>
        <div className="card">
          <FiberManualRecordIcon fontSize="large" className="text-blue-500" />
          <h3>Record Meetings</h3>
          <p>Save and watch meetings later.</p>
        </div>
      </div>

    </div>
  )
}
