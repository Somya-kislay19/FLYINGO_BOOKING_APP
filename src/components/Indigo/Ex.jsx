import React, { useState } from "react";
import "./visa.css";
import { useNavigate } from "react-router-dom";

const Visaex = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.passport) errors.passport = "Passport number is required";
    if (!formData.departure) errors.departure = "Departure location is required";
    if (!formData.arrival) errors.arrival = "Arrival location is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      passport: e.target.passport.value,
      departure: e.target.departure.value,
      arrival: e.target.arrival.value,
    };

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      navigate("/payment1");
    }
  };

  return (
    <div className="visa-bg">
      <div className="visa-header">
        <h1 className="visa-title">Visa Application</h1>
        <p className="visa-subtitle">Fill in your details to proceed with the visa process</p>
      </div>
      <div className="visa-container">
        <form className="visa-form" onSubmit={handleSubmit}>
          <h2 className="form-title">User Details</h2>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="passport">Passport Number:</label>
            <input type="text" id="passport" name="passport" placeholder="Enter your passport number" />
            {formErrors.passport && <span className="error-message">{formErrors.passport}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="departure">Departure from:</label>
            <input type="text" id="departure" name="departure" placeholder="Departure city or airport" />
            {formErrors.departure && <span className="error-message">{formErrors.departure}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="arrival">Arrival to:</label>
            <input type="text" id="arrival" name="arrival" placeholder="Arrival city or airport" />
            {formErrors.arrival && <span className="error-message">{formErrors.arrival}</span>}
          </div>

          <button type="submit" className="visa-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Visaex;
