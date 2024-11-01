import React from 'react';
import './Intro.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Intro= () => {

  const navigate = useNavigate();

  const sjb = () => {
    navigate("/sjb"); // Navigates to the Visa form page
  };

  const aib = () => {
    navigate("/aib"); // Navigates to the Visa form page
  };

  const eib = () => {
    navigate("/eib"); // Navigates to the Visa form page
  };

  const iib = () => {
    navigate("/iib"); // Navigates to the Visa form page
  };

  const rv = () => {
    navigate("/visa"); 

    };

  const help = () => {
    navigate("/h"); 
  };

  const conc = () => {
    navigate("/contact"); 
  };

  const b1 = () => {
    navigate("/create"); 
  };

  const b2 = () => {
    navigate("/create"); 
  };
  const b3 = () => {
    navigate("/contact"); 
  };


  return (
    <div> 
      <Navbar/>
    <div className="flyingo-container">
      

      <div className="main-content">
        
        <div className="sidebar">
          <div className="sidebar-item"></div>
          <button className="btn" onClick={rv}>Register for Visa</button>

          <div className="sidebar-item"></div>
          <button className="btn" onClick={help}>Explore Radar</button>


          <div className="sidebar-item"></div>
          <button className="btn" onClick={conc}>Contact Us</button>

        </div>

        <div className="cards-section">
          <div className="card large-card">
            
            <img src={require('./spicejet.jpg')} alt="Card 1" />
            <p>Spicejet</p>
        <button className="btn" onClick={sjb}>BOOK</button>

          </div>
          <div className="card large-card">
          <img src={require('./airindia.jpg')} alt="Card 2" />
            
            <p>Air-India</p>
            <button className="btn" onClick={aib}>BOOK</button>


          </div>
          <div className="card large-card">
          <img src={require('./emirates.jpg')} alt="Card 3" />
          <p>Emirates</p>
        <button className="btn" onClick={eib}>BOOK</button>

          </div>
          <div className="card large-card">
          <img src={require('./indigo.jpg')} alt="Card 4" />
          <p>Indigo</p>
        <button className="btn" onClick={iib}>BOOK</button>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <h2>FLYINGO</h2>
        </div>
        <div className="footer-right">
          <p>Your ultimate flight booking experience.</p>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Intro;
