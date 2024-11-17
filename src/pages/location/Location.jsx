import React, { useState } from 'react';
import './Location.css';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  const destinations = [
    { name: 'Ranchi', image: 'path_to_ranchi_image', route: '/ranchi' },
    { name: 'Ahmedabad', image: 'path_to_ahmedabad_image', route: '/ahmedabad' },
    { name: 'Pune', image: 'path_to_pune_image', route: '/pune' },
    { name: 'Hyderabad', image: 'path_to_hyderabad_image', route: '/hyderabad' },
    { name: 'Chennai', image: 'path_to_chennai_image', route: '/chennai' },
    { name: 'Bangalore', image: 'path_to_bangalore_image', route: '/bangalore' },
    { name: 'Surat', image: 'path_to_surat_image', route: '/surat' },
    { name: 'Jamshedpur', image: 'D:\booking\src\pages\location\a.jpg', route: '/jamshedpur' },
    { name: 'Delhi', image: 'path_to_delhi_image', route: '/delhi' }
  ];

  const handleCityClick = (city, route) => {
    setSelectedCity(city);
    navigate(route); 
  };

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
            className={`carrd ${selectedCity === destination.name ? 'selected' : ''}`}
            onClick={() => handleCityClick(destination.name, destination.route)} 
          >
            <img src={destination.image} alt={destination.name} className="carrd-image" />
            <div className="city-name">{destination.name}</div>
          </div>
        ))}
      </div>

      {selectedCity && (
        <div className="selected-destination">
          <h3>You have selected: {selectedCity}</h3>
        </div>
      )}
    </div>
  );
};

export default Location;
