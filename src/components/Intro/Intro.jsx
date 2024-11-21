import React from 'react';
import './Intro.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Intro = () => {
  const navigate = useNavigate();

  const sjb = () => navigate("/sjb2");
  const aib = () => navigate("/aib2");
  const eib = () => navigate("/eib2");
  const iib = () => navigate("/iib2");
  const rv = () => navigate("/visa");
  const help = () => window.open('https://www.radarbox.com/', '_blank', 'fullscreen=yes');
  const conc = () => navigate("/contact");

  

  return (
    <div>
      <Navbar />
      <div className="flyingo-container">
        <header className="hero-section">
          <h1 className="hero-title">Welcome to FLYINGO</h1>
          <p className="hero-subtitle">Your ultimate flight booking experience.</p>
          <button className="hero-btn" onClick={rv}>Register for Visa</button>
        </header>

        <div className="main-content">
          <div className="cards-section">
            <div className="cardu">
              <img src={require('./spicejet.jpg')} alt="Spicejet" className="cardu-image" />
              <p className="cardu-title">SpiceJet</p>
              <button className="cardu-btn" onClick={sjb}>Book Now</button>
            </div>
            <div className="cardu">
              <img src={require('./airindia.jpg')} alt="Air India" className="cardu-image" />
              <p className="cardu-title">Air India</p>
              <button className="cardu-btn" onClick={aib}>Book Now</button>
            </div>
            <div className="cardu">
              <img src={require('./emirates.jpg')} alt="Emirates" className="cardu-image" />
              <p className="cardu-title">Emirates</p>
              <button className="cardu-btn" onClick={eib}>Book Now</button>
            </div>
            <div className="cardu">
              <img src={require('./indigo.jpg')} alt="Indigo" className="cardu-image" />
              <p className="cardu-title">IndiGo</p>
              <button className="cardu-btn" onClick={iib}>Book Now</button>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-left">
            <h2>FLYINGO</h2>
            <p>Your travel companion for stress-free bookings.</p>
          </div>
          <div className="footer-right">
            <ul className="footer-links">
              <li onClick={help}>Explore Radar</li>
              <li onClick={conc}>Contact Us</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Intro;
