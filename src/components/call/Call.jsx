import React from 'react';
import './Call.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const co1 = () => {
    window.open('https://www.radarbox.com/', '_blank', 'fullscreen=yes');
  };

  const flightStatus = () => {
    window.open('https://www.flightstats.com/', '_blank');
  };

  const cancellationInfo = () => {
    navigate("/re");
  };

  const baggageInfo = () => {
    navigate("/re");
  };

  const rescheduleFlight = () => {
    navigate("/rf");
  };

  const pilots = [
    { name: "Capt. Rajesh Verma", airline: "Air India", rating: 4.8, experience: "15 years" },
    { name: "Capt. Lisa Brown", airline: "Emirates", rating: 4.9, experience: "18 years" },
    { name: "Capt. Ravi Kumar", airline: "IndiGo", rating: 4.7, experience: "12 years" },
    { name: "Capt. John Smith", airline: "SpiceJet", rating: 4.6, experience: "10 years" },
    { name: "Capt. Aisha Khan", airline: "Air India", rating: 4.8, experience: "16 years" },
    { name: "Capt. Amee", airline: "IndiGo", rating: 4.2, experience: "20 years" },
    { name: "Capt. Olivia Grace", airline: "Emirates", rating: 4.9, experience: "20 years" },
    { name: "Capt. Grace", airline: "Air India", rating: 4.1, experience: "10 years" },

  ];

  return (
    <div className="contact-container">
      <nav className="naavbar">
        <h1 className="naavbar-logo">FLYINGO</h1>
      </nav>

      <div className="contact-body">
        <h2>Contact Us</h2>
        <p>How can we assist you today?</p>

        <div className="contact-buttons">
          <button className="contact-option" onClick={co1}>Want to know about flights</button>
          <button className="contact-option" onClick={flightStatus}>Check Flight Status</button>
          <button className="contact-option" onClick={cancellationInfo}>Cancellation/Refund Information</button>
          <button className="contact-option" onClick={rescheduleFlight}>Reschedule Your Flight</button>
          <button className="contact-option" onClick={baggageInfo}>Baggage Information</button>
        </div>
      </div>

      <div className="pilots-section">
        <h2>Top Pilots</h2>
        <div className="pilots-grid">
          {pilots.map((pilot, index) => (
            <div key={index} className="pilot-card">
              <h3>{pilot.name}</h3>
              <p>Airline: {pilot.airline}</p>
              <p>Experience: {pilot.experience}</p>
              <p>Rating: {pilot.rating} ⭐</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
