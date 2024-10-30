import React, { useState } from 'react';
import './Call.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

 

  const co1 = () => {
    window.open('https://www.radarbox.com/', '_blank', 'fullscreen=yes');
  };

  const flightStatus = () => {
    window.open('https://www.flightstats.com/', '_blank');
  };
  const navigate = useNavigate();

  const cancellationInfo =()=>{
    navigate("/re");
  }

  const baggageInfo =()=>{
    navigate("/re");
  }

  const rescheduleFlight =()=>{
    navigate("/rf");
  }

  return (
    <div className="contact-container">
      <nav className="navbar">
        <h1 className="navbar-logo">FLYINGO</h1>
      </nav>

      <div className="contact-body">
        <h2>Contact Us</h2>
        <p>How can we assist you today?</p>

        <div className="contact-buttons">
          <button className="contactoption" onClick={co1}>Want to know about flights</button>
          <button className="contactoption" onClick={flightStatus}>Check Flight Status</button>
          <button className="contactoption" onClick={cancellationInfo}>Cancellation/Refund Information</button>
          <button className="contactoption" onClick={rescheduleFlight}>Reschedule Your Flight</button>
          <button className="contactoption" onClick={baggageInfo}>Baggage Information</button>
        </div>

        <div className="chat-box">
          <p>Need quick help? Chat with our AI assistant!</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
