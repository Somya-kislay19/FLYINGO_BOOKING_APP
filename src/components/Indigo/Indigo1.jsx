import React, { useEffect, useState } from 'react';
import './Indigo.css'; 
import { useNavigate } from "react-router-dom";

const Indigo1 = () => {
  const navigate = useNavigate();
  

    const ahandleAvailabilityClick = () => {
        navigate("/indigobooking");
      };
    
     
    
    return (
        <div className="airindia-page">
          <div className=''>Showing flights from 
           
          </div>
           <div className="searchItemsContainer">
      <div className="searchItem">
        <img src={require('./i.jpg')} alt="Airline 1" className="fpImg" />
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
        <img src={require('./i.jpg')} alt="Airline 2" className="fpImg" />
        <div className="siDesc">
          <h1 className="siTitle">Indigo</h1>
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
        <img src={require('./i.jpg')} alt="Airline 3" className="fpImg" />
        <div className="siDesc">
          <h1 className="siTitle">Indigo</h1>
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
        <img src={require('./i.jpg')} alt="Airline 4" className="fpImg" />
        <div className="siDesc">
          <h1 className="siTitle">Indigo</h1>
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

export default Indigo1;
