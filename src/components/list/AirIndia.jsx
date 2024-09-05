import React, { useEffect, useState } from 'react';
import './AirIndia.css'; 
import { useNavigate } from "react-router-dom";

const Airindia = () => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userDetails, setUserDetails] = useState({});

    const ahandleAvailabilityClick = () => {
        navigate("/airindiabooking");
      };
    
      useEffect(() => {
        const details = JSON.parse(localStorage.getItem('userDetails'));
        if (details) {
            setUserDetails(details);
        }
    }, []);
    
    return (
        <div className="airindia-page">
          <div className=''>Showing flights from 
          <h1>Flight: {userDetails.flight}</h1>
            <p>Departure: {userDetails.departure}</p>
            <p>Arrival: {userDetails.arrival}</p>
            <p>Date: 25th July 2024</p>
          </div>
           <div className="searchItemsContainer">
      <div className="searchItem">
        <img src={require('./a.jpg')} alt="Airline 1" className="fpImg" />
        <div className="siDesc">
          <h1 className="siTitle">IndiGo</h1>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">At your comfort</span>
          <span className="siFeatures"></span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">Rs.1102/- starting</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={ahandleAvailabilityClick}>
              See availability
            </button>
          </div>
        </div>
      </div>
      
      <div className="searchItem">
        <img src={require('./a.jpg')} alt="Airline 2" className="fpImg" />
        <div className="siDesc">
          <h1 className="siTitle">Air India</h1>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">At your comfort</span>
          <span className="siFeatures"></span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>9.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">Rs.1320/- starting</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={ahandleAvailabilityClick}>
              See availability
            </button>
          </div>
        </div>
      </div>

      <div className="searchItem">
        <img src={require('./a.jpg')} alt="Airline 3" className="fpImg" />
        <div className="siDesc">
          <h1 className="siTitle">Spicejet</h1>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">At your comfort</span>
          <span className="siFeatures"></span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.0</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">Rs.1020/- starting</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={ahandleAvailabilityClick}>
              See availability
            </button>
          </div>
        </div>
      </div>

      <div className="searchItem">
        <img src={require('./a.jpg')} alt="Airline 4" className="fpImg" />
        <div className="siDesc">
          <h1 className="siTitle">Emirates</h1>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">At your comfort</span>
          <span className="siFeatures"></span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">Rs.1220/- starting</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={ahandleAvailabilityClick}>
              See availability
            </button>
          </div>
        </div>
      </div>

      

    
    </div>
        </div>
    );
};

export default Airindia;
