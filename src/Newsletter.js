import React from "react";
import "./Newsletter.css";
import SendIcon from '@mui/icons-material/Send';

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="news">
        <h1>Newsletter</h1>
        <h4>Get Timely updates from your favorite products</h4>
        <form action="" className="form">
          <input type="text" placeholder="Your Email" />
          <button className="button"><SendIcon className="send-icon" /></button>
        </form>
        
      </div>
    </div>
  );
}

export default Newsletter;
