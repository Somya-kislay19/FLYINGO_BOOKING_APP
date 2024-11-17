import React, { useState, useEffect } from 'react';
import './Emirates.css'; 
import { useNavigate } from "react-router-dom";
import Navbarr from '../navbar/Navbar copy';

const Emirates = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [selectedFlights, setSelectedFlights] = useState([]);

  const flights = [
    {
      id: 1,
      airline: "Emirates",
      flightNo: "AI-302",
      route: "Delhi - Mumbai",
      price: 5200,
      rating: 8.9,
      image: require('./e.jpg'),
      classOptions: ["Economy", "Business", "First Class"],
      reviews: ["Comfortable journey", "Great service!"],
    },
    {
      id: 2,
      airline: "Emirates",
      flightNo: "EK-505",
      route: "Mumbai - Dubai",
      price: 18200,
      rating: 9.5,
      image: require('./e.jpg'),
      classOptions: ["Economy", "Business"],
      reviews: ["Loved the on-time performance",  "Premium facilities"],
    },
    {
      id: 3,
      airline: "Emirates",
      flightNo: "6E-112",
      route: "Kolkata - Bangalore",
      price: 4200,
      rating: 8.7,
      image: require('./e.jpg'),
      classOptions: ["Economy"],
      reviews: ["Affordable and comfortable", "Quick boarding process"],
    },
    {
      id: 4,
      airline: "Emirates",
      flightNo: "SG-302",
      route: "Chennai - Hyderabad",
      price: 3900,
      rating: 8.0,
      image: require('./e.jpg'),
      classOptions: ["Economy", "Business"],
      reviews: ["Good service for the price", "Clean and well-maintained flight"],
    },
    {
      id: 5,
      airline: "Emirates",
      flightNo: "SG-302",
      route: "Ranchi - Bangalore",
      price: 3900,
      rating: 8.0,
      image: require('./e.jpg'),
      classOptions: ["Economy", "Business"],
      reviews: ["Good service for the price", "Feels like home"],
    },
    {
      id: 6,
      airline: "Emirates",
      flightNo: "SG-302",
      route: "Deoghar - Surat",
      price: 3900,
      rating: 8.0,
      image: require('./e.jpg'),
      classOptions: ["Economy", "Business"],
      reviews: ["Loved the on-time performance", "Clean and well-maintained flight"],
    },
    {
      id: 7,
      airline: "Emirates",
      flightNo: "SG-302",
      route: "Chennai - Pune",
      price: 3900,
      rating: 8.0,
      image: require('./e.jpg'),
      classOptions: ["Economy", "Business"],
      reviews: ["Good service for the price", "Clean and well-maintained flight"],
    },
    {
      id: 8,
      airline: "Emirates",
      flightNo: "SG-302",
      route: "Kolkata - Hyderabad",
      price: 3900,
      rating: 8.0,
      image: require('./e.jpg'),
      classOptions: ["Economy", "Business"],
      reviews: ["Lovely Experience", "Clean and well-maintained flight"],
    },
  ];

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem('userDetails'));
    if (details) {
      setUserDetails(details);
    }
  }, []);

  const handleFlightSelection = (flight) => {
    if (!selectedFlights.find((f) => f.id === flight.id)) {
      setSelectedFlights([...selectedFlights, flight]);
    }
  };

  const handleRemoveFlight = (flightId) => {
    setSelectedFlights(selectedFlights.filter((flight) => flight.id !== flightId));
  };

  const ahandleAvailabilityClick = (flightId) => {
    navigate("/airindiabooking", { state: { flightId } });
  };

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
              <div className='flight-reviews'>
                <h4>Reviews:</h4>
                <ul>
                  {flight.reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                  ))}
                </ul>
              </div>
              <button
                className='availability-button'
                onClick={() => handleFlightSelection(flight)}
              >
                Select Flight
              </button>
              <button
                className='availability-button secondary'
                onClick={() => ahandleAvailabilityClick(flight.id)}
              >
                See Availability
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='selected-flights-box'>
        <h2>Your Selected Flights</h2>
        {selectedFlights.length === 0 ? (
          <p>No flights selected. Please select a flight.</p>
        ) : (
          <div className='selected-flights-list'>
            {selectedFlights.map((flight) => (
              <div key={flight.id} className='selected-flight'>
                <span>{flight.airline} - {flight.route} (₹{flight.price})</span>
                <button onClick={() => handleRemoveFlight(flight.id)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Emirates;
