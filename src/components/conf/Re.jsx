import React, { useState } from 'react';
import './Re.css';
import { useNavigate } from 'react-router-dom';

const Re = () => {
  const [name, setName] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [newDate, setNewDate] = useState('');
  const [baggage, setBaggage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Name:', name);
    console.log('Flight Number:', flightNumber);
    console.log('New Date:', newDate);
    console.log('Baggage Info:', baggage);
    console.log('Rooms:', options.room);
    console.log('Adults:', options.adult);
    console.log('Children:', options.children);
  };


  const navigate=useNavigate();
  const c=()=>{
     navigate("/c")
  }
  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <div className="reschedule-container">
      <h1>Your Concern, Our Responsibility!</h1>
      <form className="reschedule-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="flightNumber">Flight Number:</label>
          <input
            type="text"
            id="flightNumber"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="newDate">New Date of Travel:</label>
          <input
            type="date"
            id="newDate"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            required
          />
        </div>

        {/* Room Selection */}
        <div className="form-group">
          <label htmlFor="room">Room:</label>
          <div className="optionCounter">
            <button
              type="button"
              disabled={options.room <= 1}
              className="optionCounterButton"
              onClick={() => handleOption("room", "d")}
            >
              -
            </button>
            <span className="optionCounterNumber">{options.room}</span>
            <button
              type="button"
              className="optionCounterButton"
              onClick={() => handleOption("room", "i")}
            >
              +
            </button>
          </div>
        </div>

        {/* Adult Selection */}
        <div className="form-group">
          <label htmlFor="adult">Adults:</label>
          <div className="optionCounter">
            <button
              type="button"
              disabled={options.adult <= 1}
              className="optionCounterButton"
              onClick={() => handleOption("adult", "d")}
            >
              -
            </button>
            <span className="optionCounterNumber">{options.adult}</span>
            <button
              type="button"
              className="optionCounterButton"
              onClick={() => handleOption("adult", "i")}
            >
              +
            </button>
          </div>
        </div>

        {/* Children Selection */}
        <div className="form-group">
          <label htmlFor="children">Children:</label>
          <div className="optionCounter">
            <button
              type="button"
              disabled={options.children <= 0}
              className="optionCounterButton"
              onClick={() => handleOption("children", "d")}
            >
              -
            </button>
            <span className="optionCounterNumber">{options.children}</span>
            <button
              type="button"
              className="optionCounterButton"
              onClick={() => handleOption("children", "i")}
            >
              +
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="baggage">Baggage Information:</label>
          <input
            type="text"
            id="baggage"
            value={baggage}
            onChange={(e) => setBaggage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button" onClick={c}> Submit</button>
      </form>
    </div>
  );
}

export default Re;
