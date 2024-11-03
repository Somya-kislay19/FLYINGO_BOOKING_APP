import React, { useState } from "react";
import "./visa.css";
import { useNavigate } from "react-router-dom";

const Visaex = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.passport) errors.passport = "Passport number is required";
    if (!formData.departure) errors.departure = "Departure location is required";
    if (!formData.arrival) errors.arrival = "Arrival location is required";
    return errors;
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      passport: e.target.passport.value,
      departure: e.target.departure.value,
      arrival: e.target.arrival.value,
      flight: selectedOption,
    };

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
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
        navigate("/payment1");
      }
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const s = () => {
    navigate("/payment1"); 
  };

  return (
    <div className="bg">
      <div className="visa-container">
        <form className="visa-form" onSubmit={handleSearch}>
          <h1 className="form-title">USER DETAILS</h1>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
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
            
            {formErrors.flight && <span className="error-message">{formErrors.flight}</span>}
          </div>

          <button type="submit" className="submit-btn" onClick={s}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Visaex;
