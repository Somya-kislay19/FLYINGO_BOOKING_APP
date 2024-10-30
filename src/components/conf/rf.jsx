import React, { useState } from 'react';
import './Re.css';
import { useNavigate } from 'react-router-dom';

const Rf = () => {
  const [name, setName] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [newDate, setNewDate] = useState('');
  const [baggage, setBaggage] = useState('');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();// prevent form submission default behavior


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
     navigate("/payment")
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
      <h1>Reschedule Your Flight</h1>
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

        <div className="form-group">
            <label htmlFor="passport">Passport Number:</label>
            <input type="text" id="passport" name="passport" required />
            {formErrors.passport && <span className="error-message">{formErrors.passport}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="departure">Departure from:</label>
            <input type="text" id="departure" name="departure" required />
            {formErrors.departure && <span className="error-message">{formErrors.departure}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="arrival">Arrival to:</label>
            <input type="text" id="arrival" name="arrival" required />
            {formErrors.arrival && <span className="error-message">{formErrors.arrival}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="flight">Flight Preference:</label>
            <div className="dropdown-container">
              <input
                type="text"
                id="flight"
                name="flight"
                value={selectedOption}
                readOnly
                placeholder="Select a flight"
              />
              <button type="button" className="arrow-btn" onClick={toggleDropdown}>
                {isDropdownOpen ? '▲' : '▼'}
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#" onClick={() => handleOptionClick("IndiGo")}>IndiGo</a>
                  <a href="#" onClick={() => handleOptionClick("Air India")}>Air India</a>
                  <a href="#" onClick={() => handleOptionClick("Spicejet")}>Spicejet</a>
                  <a href="#" onClick={() => handleOptionClick("Emirates")}>Emirates</a>
                </div>
              )}
            </div>
            {formErrors.flight && <span className="error-message">{formErrors.flight}</span>}
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

export default Rf;
