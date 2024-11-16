import React, { useState } from "react";
import "./FlightApp.css";
import { useNavigate } from "react-router-dom";

const FlightApp = () => {
  const [flights, setFlights] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const fetchFlights = async () => {
    setError("");
    if (!query.trim()) {
      setError("Please enter an airline or flight number");
      return;
    }

    try {
      const API_KEY = "cc81b179839d138fbb80cdc4adad6ae8"; 
      const url = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&airline_name=${query}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch flight data");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.info || "Error fetching flight data");
      }

      setFlights(data.data);
    } catch (error) {
      setFlights([]);
      setError(error.message);
    }
  };

  const addToCart = (flight) => {
    if (cart.some((item) => item.flight.number === flight.flight.number)) {
      setError("Flight is already in the cart");
      return;
    }
    setCart([...cart, flight]);
    setError("");
  };

  const removeFromCart = (flightNumber) => {
    setCart(cart.filter((item) => item.flight.number !== flightNumber));
  };

  const confirmBooking = () => {
    if (cart.length === 0) {
      setError("No flights in the cart to book");
      return;
    }
    alert("Redirecting To Checkout!");
    setCart([]); 
    navigate("/checkoutt");
  };

  return (
    <div className="flight-container">
     
     
      <div className="flights-section">
        <h1 className="app-title">Flight Explorer</h1>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter airline name or flight number"
          />
          <button className="search-button" onClick={fetchFlights}>
            Search
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="flight-list">
          {flights.length > 0 ? (
            flights.map((flight, index) => (
              <div className="flight-card" key={index}>
                <h3>{flight.airline.name}</h3>
                <p>
                  <strong>Flight:</strong> {flight.flight.number}
                </p>
                <p>
                  <strong>Departure:</strong> {flight.departure.airport}, {flight.departure.scheduled}
                </p>
                <p>
                  <strong>Arrival:</strong> {flight.arrival.airport}, {flight.arrival.scheduled}
                </p>
                <p>
                  <strong>Status:</strong> {flight.flight_status}
                </p>
                <button className="add-cart-button" onClick={() => addToCart(flight)}>
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No flight data available. Try a different query.</p>
          )}
        </div>
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h2>Cart</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <p>
                {item.airline.name} - {item.flight.number}
              </p>
              <button className="remove-cart-button" onClick={() => removeFromCart(item.flight.number)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        {cart.length > 0 && (
          <button className="confirm-button" onClick={confirmBooking}>
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
};

export default FlightApp;
