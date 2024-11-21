import React, { useState } from 'react';
import './Location.css';
import { useNavigate } from 'react-router-dom';
import Navbarr from '../../components/navbar/Navbar copy';

const Location = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  const destinations = [
    { name: 'Ranchi', route: '/ranchi' },
    { name: 'Ahmedabad', route: '/ahmedabad' },
    { name: 'Pune', route: '/pune' },
    { name: 'Hyderabad', route: '/hyderabad' },
    { name: 'Chennai', route: '/chennai' },
    { name: 'Bangalore', route: '/bangalore' },
    { name: 'Surat', route: '/surat' },
    { name: 'Jamshedpur', route: '/jamshedpur' },
    { name: 'Delhi', route: '/delhi' }
  ];

  const handleCityClick = (city, route) => {
    setSelectedCity(city);
    navigate(route); 
  };

  return (
    <div className="location-page">
      <Navbarr/>
      <div className="greet-section">
        <h1>Hello, Welcome to FLYINGO!</h1>
        <h2>What's your destination?</h2>
        <p>Select your go to destination</p>
      </div>




      <div className="destination-cards">
        {destinations.map((destination) => (
          <div 
            key={destination.name} 
            className={`carrd ${selectedCity === destination.name ? 'selected' : ''}`}
            onClick={() => handleCityClick(destination.name, destination.route)} 
          >
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
