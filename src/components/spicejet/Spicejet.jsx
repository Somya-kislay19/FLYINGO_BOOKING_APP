import React, { useEffect, useState } from 'react';
import './Spicejet.css'; 
import { useNavigate } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import Navbarr from '../navbar/Navbar copy';

const Spicejet = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const ahandleAvailabilityClick = (flightId) => {
    navigate("/airindiabooking", { state: { flightId } });
  };

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem('userDetails'));
    if (details) {
      setUserDetails(details);
    }
  }, []);

  const flights = [
    {
      id: 1,
      airline: "Spicejet",
      flightNo: "AI-302",
      route: "Delhi - Mumbai",
      price: 5200,
      rating: 8.9,
      image: require('./s.jpg'),
      classOptions: ["Economy", "Business", "First Class"],
    },
    {
      id: 2,
      airline: "Spicejet",
      flightNo: "EK-505",
      route: "Mumbai - Dubai",
      price: 18200,
      rating: 9.5,
      image: require('./s.jpg'),
      classOptions: ["Economy", "Business"],
    },
    {
      id: 3,
      airline: "Spicejet",
      flightNo: "6E-112",
      route: "Kolkata - Bangalore",
      price: 4200,
      rating: 8.7,
      image: require('./s.jpg'),
      classOptions: ["Economy"],
    },
    {
      id: 4,
      airline: "Spicejet",
      flightNo: "SG-302",
      route: "Chennai - Hyderabad",
      price: 3900,
      rating: 8.0,
      image: require('./s.jpg'),
      classOptions: ["Economy", "Business"],
    },
    {
      id: 4,
      airline: "IndiGo",
      flightNo: "SG-302",
      route: "Chennai - Hyderabad",
      price: 3900,
      rating: 8.0,
      image: require('./s.jpg'),
      classOptions: ["Economy", "Business"],
    },
    {
      id: 4,
      airline: "Spicejet",
      flightNo: "SG-302",
      route: "Surat - Hyderabad",
      price: 3900,
      rating: 8.0,
      image: require('./s.jpg'),
      classOptions: ["Economy", "Business"],
    },
    {
      id: 4,
      airline: "Spicejet",
      flightNo: "SG-302",
      route: "Chennai - Ranchi",
      price: 3900,
      rating: 8.0,
      image: require('./s.jpg'),
      classOptions: ["Economy", "Business"],
    },
    {
      id: 4,
      airline: "Spicejet",
      flightNo: "SG-302",
      route: "Patna - Pune",
      price: 3900,
      rating: 8.0,
      image: require('./s.jpg'),
      classOptions: ["Economy", "Business"],
    },
  ];

  return (
    <div className='airindia-container'>
      <Navbarr />
      <div className='airindia-header'>
        <h1 className='airindia-title'>Explore and Book Flights</h1>
        <p className='airindia-subtitle'>Find the best deals and enjoy a seamless travel experience.</p>
      </div>
      <div className='flights-grid'>
        {flights.map((flight) => (
          <div key={flight.id} className='flight-card'>
            <img src={flight.image} alt={flight.airline} className='flight-image' />
            <div className='flight-details'>
              <h2 className='flight-title'>{flight.airline}</h2>
              <p className='flight-route'>{flight.route}</p>
              <p className='flight-info'>Flight No: {flight.flightNo}</p>
              <p className='flight-price'>Starting at ₹{flight.price}</p>
              <div className='flight-rating'>
                <span>Rating: {flight.rating}</span>
              </div>
              <div className='flight-classes'>
                <span>Available Classes:</span>
                <ul>
                  {flight.classOptions.map((cls, index) => (
                    <li key={index} className='class-option'>{cls}</li>
                  ))}
                </ul>
              </div>
              <button
                className='availability-button'
                onClick={() => ahandleAvailabilityClick(flight.id)}
              >
                See Availability
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spicejet;
