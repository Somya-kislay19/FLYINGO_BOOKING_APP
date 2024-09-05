import React, { useState } from "react";
import "./visa.css";
import { useNavigate } from "react-router-dom";

const Visa = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); 

  const handleSearch = (e) => {
    e.preventDefault(); 

    const formData = {
      name: e.target.name.value,
      passport: e.target.passport.value,
      departure: e.target.departure.value,
      arrival: e.target.arrival.value,
      flight: selectedOption 
    };

    localStorage.setItem('userDetails', JSON.stringify(formData));

    if (selectedOption === "Air India") {
      navigate("/airindia");
    } else if (selectedOption === "Spicejet") {
      navigate("/spicejet");
    } else if (selectedOption === "Emirates") {
      navigate("/emirates");
    } else if (selectedOption === "IndiGo") {
      navigate("/indigo");
    } else {
      navigate("/hotels");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
    setIsDropdownOpen(false); 
  };

  return (
    <div className="bg">
      <div className="visa-container">
        <form className="visa-form" onSubmit={handleSearch}>
          <h1 className="form-title">USER DETAILS</h1>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="passport">Passport Number:</label>
            <input type="text" id="passport" name="passport" required />
          </div>
          <div className="form-group">
            <label htmlFor="departure">Departure from:</label>
            <input type="text" id="departure" name="departure" required />
          </div>
          <div className="form-group">
            <label htmlFor="arrival">Arrival to:</label>
            <input type="text" id="arrival" name="arrival" required />
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
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Visa;
