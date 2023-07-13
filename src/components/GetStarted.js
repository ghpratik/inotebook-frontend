import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import illustration from "../assets/illustrations/accessNotes.svg";
import './GetStarted.css'
function GetStarted() {

  return (
    <div className="page">
      <h1 className="heading">Start Organizing your notes with memopad!</h1>
      <div className="bottomContainer">
        <div className="left">
        <h4>MemoPad is a cloud-based website that allows users to create, store, edit, and organize notes. With its user-friendly interface, you can easily manage your ideas and information from any device. Say goodbye to scattered notes and enjoy the convenience of MemoPad's centralized platform.</h4>
        {/* <Link style={btnStyle} to="/login">Get Started <FontAwesomeIcon icon="fa-solid fa-arrow-right" beatFade style={{color: "#ffffff",}} /></Link> */}
        <Link to="/login"><button className="btn btn-lg btn-info startbtn"><b>Get Started </b><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button></Link>
        </div>
        <div className="illustration">
          <img src={illustration} alt="accessing notes" width={500} height={500}/>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;

