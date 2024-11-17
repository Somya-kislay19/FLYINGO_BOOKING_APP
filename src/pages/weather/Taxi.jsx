import React, { useState } from "react";
import "./taxi.css";

const TaxiService = () => {
  const [selectedTaxis, setSelectedTaxis] = useState([]);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({ time: "", location: "" });

  const taxis = [
    { id: 1, name: "UberX", city: "Delhi", fare: "₹10/km", rating: 4.5 },
    { id: 2, name: "Ola Mini", city: "Mumbai", fare: "₹8/km", rating: 4.3 },
    { id: 3, name: "Rapido Bike", city: "Bangalore", fare: "₹5/km", rating: 4.2 },
    { id: 4, name: "Meru Cabs", city: "Hyderabad", fare: "₹12/km", rating: 4.1 },
    { id: 5, name: "Mega Cabs", city: "Chennai", fare: "₹9/km", rating: 4.4 },
    { id: 6, name: "Zoomcar", city: "Pune", fare: "₹15/km", rating: 4.6 },
    { id: 7, name: "BluSmart", city: "Noida", fare: "₹7/km", rating: 4.3 },
    { id: 8, name: "Jugnoo", city: "Jaipur", fare: "₹6/km", rating: 4.0 },
    { id: 9, name: "GetMeCab", city: "Kolkata", fare: "₹10/km", rating: 4.1 },
    { id: 10, name: "Gozo Cabs", city: "Ahmedabad", fare: "₹11/km", rating: 4.2 },
  ];

  const handleTaxiSelection = (taxi) => {
    setSelectedTaxis([...selectedTaxis, taxi]);
    document.querySelector(".booking-box").scrollIntoView({ behavior: "smooth" });
  };

  const handleRemoveTaxi = (id) => {
    setSelectedTaxis(selectedTaxis.filter((taxi) => taxi.id !== id));
  };

  const handleBookingConfirmation = () => {
    if (bookingDetails.time && bookingDetails.location) {
      alert(`Booking confirmed for ${selectedTaxis.map((t) => t.name).join(", ")}`);
    } else {
      alert("Please set your time and location!");
    }
  };

  return (
    <div className="taxi-service-container">
      <h1 className="heading">Available Taxi Services By Flyingo</h1>
      <div className="taxi-list">
        {taxis.map((taxi) => (
          <div key={taxi.id} className="taxi-card">
            <h3>{taxi.name}</h3>
            <p>City: {taxi.city}</p>
            <p>Fare: {taxi.fare}</p>
            <p>Rating: {taxi.rating} ⭐</p>
            <button
              className="select-button"
              onClick={() => handleTaxiSelection(taxi)}
              disabled={selectedTaxis.find((t) => t.id === taxi.id)}
            >
              {selectedTaxis.find((t) => t.id === taxi.id) ? "Selected" : "Select Taxi"}
            </button>
          </div>
        ))}
      </div>

      <div className="booking-box">
        <h2>Your Booking</h2>
        {selectedTaxis.length === 0 ? (
          <p>No taxis selected. Please select a taxi.</p>
        ) : (
          <div className="selected-taxis">
            {selectedTaxis.map((taxi) => (
              <div key={taxi.id} className="selected-taxi">
                <span>{taxi.name}</span>
                <button onClick={() => handleRemoveTaxi(taxi.id)}>Remove</button>
              </div>
            ))}
          </div>
        )}
        <div className="booking-details">
          <label>
            Set Time:
            <input
              type="time"
              value={bookingDetails.time}
              onChange={(e) => setBookingDetails({ ...bookingDetails, time: e.target.value })}
            />
          </label>
          <label>
            Set Location:
            <input
              type="text"
              placeholder="Enter location"
              value={bookingDetails.location}
              onChange={(e) => setBookingDetails({ ...bookingDetails, location: e.target.value })}
            />
          </label>
          <button className="confirm-button" onClick={handleBookingConfirmation}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxiService;
