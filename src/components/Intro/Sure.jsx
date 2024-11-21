import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sure.css';

const Sure = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    idProof: '',
    visaNumber: '',
    email: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleProceed = () => {
    if (!formData.acceptedTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }
    if (
      !formData.name ||
      !formData.dob ||
      !formData.idProof ||
      !formData.visaNumber ||
      !formData.email
    ) {
      alert("Please fill in all the required fields.");
      return;
    }
    navigate("/payment1", { state: { formData } });
  };

  return (
    <div className="booking-page">
      <h1>Advance Booking Confirmation</h1>

      <div className="terms-box">
        <h2>Terms and Conditions</h2>
        <p>
          You have chosen to book in advance and hold your booking. By
          proceeding, you agree to our terms and conditions. We will notify you
          at the right time to complete your booking.
        </p>
        <label className="checkbox-container">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
      </div>

      <div className="user-details">
        <h2>Your Information</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Original ID Proof Number:
          <input
            type="text"
            name="idProof"
            value={formData.idProof}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Visa Number:
          <input
            type="text"
            name="visaNumber"
            value={formData.visaNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email ID:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button className="proceed-btn" onClick={handleProceed}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default Sure;
