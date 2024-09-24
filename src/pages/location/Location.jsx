import React, { useState } from 'react';
import './Location.css';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const [selectedCity, setSelectedCity] = useState(''); // State for selected city

  const destinations = [
    { name: 'Ranchi', image: 'path_to_ranchi_image' },
    { name: 'Ahmedabad', image: 'path_to_ahmedabad_image' },
    { name: 'Pune', image: 'path_to_pune_image' },
    { name: 'Hyderabad', image: 'path_to_hyderabad_image' },
    { name: 'Chennai', image: 'path_to_chennai_image' },
    { name: 'Bangalore', image: 'path_to_bangalore_image' },
    { name: 'Surat', image: 'path_to_surat_image' },
    { name: 'Jamshedpur', image: 'path_to_jamshedpur_image' },
    { name: 'Delhi', image: 'path_to_delhi_image' }
  ];

  const handleCityClick = (city) => {
    setSelectedCity(city); // Update the selected city
  };
  const navigate = useNavigate();

  const f=()=>{
    navigate("/f");
  }

  return (
    <div className="location-page">
      <div className="greet-section">
        <h1>Hello, Welcome to FLYINGO!</h1>
        <h2>What's your destination?</h2>
        <p>Select your destination</p>
      </div>

      <div className="destination-cards">
        {destinations.map((destination) => (
          <div 
            key={destination.name} 
            className={`card ${selectedCity === destination.name ? 'selected' : ''}`}
            onClick={() => handleCityClick(destination.name)}
          >
            <img src={destination.image} alt={destination.name} className="card-image" />
            <div className="city-name">{destination.name}</div>
          </div>
        ))}
      </div>

      {selectedCity && (
        <div className="selected-destination">
          <h3>You have selected: {selectedCity}</h3>
          <button className="stay-button" onClick={f}>Show stays in {selectedCity}</button>
        </div>
      )}
    </div>
  );
};

export default Location;
