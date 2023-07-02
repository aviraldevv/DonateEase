import React from "react";
import "./styles.css";

function Hero(props){
  
  
  return (
    <div className="hero-section">
      {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">React.js Sample Project</h1>

      <p className="lead">
        This is a sample application that demonstrates an authentication flow for
        an SPA, using <a href="https://reactjs.org">React.js</a>
      </p> */}

      <div className="main-section">
        <div className="button-card">
          <h1>Get Funds</h1>
        </div>

        <div className="button-card" onClick={()=>{
          // console.log("clicked1");
          props.handlechange();
        }}>
          <h1>Donate</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
