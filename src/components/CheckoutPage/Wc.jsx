import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";
import Navbar from "../navbar/Navbar";
import Navbarr from "../navbar/Navbar copy";

const Success = ({ setUserDetails }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill in all details");
      return;
    }

    setUserDetails({ name, email, phone });

    navigate("/home");
  };

  return (
    <div className="success-container">
      <h1 className="success-title">
        Welcome to <span className="highlight">Flyingo</span>
      </h1>
      <p>Please log in to your account for a better experience!</p>
      <form className="user-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
        <button type="submit" className="submit-button">
          GET STARTED
        </button>
      </form>
    </div>
  );
};

export default Success;
