import React from 'react';
import { Link } from 'react-router-dom';
function GetStarted() {

  const headingStyle = {
    color: '#1c3474',
    fontSize: '100px'
  };

  const btnStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    margin: '10px',
  };

  const pageStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    padding: '150px',
    textAlign: 'center',
    background: '#f2f2f2',
    backgroundImage: 'url("../assets/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  //#87ffdd logo color

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Start Organizing your notes with memopad!</h1>
      <div>
        <h4>Store your notes and never forget important information again.</h4>
        {/* <Link style={btnStyle} to="/login">Get Started <FontAwesomeIcon icon="fa-solid fa-arrow-right" beatFade style={{color: "#ffffff",}} /></Link> */}
        <Link style={btnStyle} to="/login">Get Started</Link>
      </div>
    </div>
  );
}

export default GetStarted;

