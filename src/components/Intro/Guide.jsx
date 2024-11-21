import React, { useState } from "react";
import "./TourGuide.css";

const TourGuide = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    selectedGuide: "",
  });

  const guides = [
    { name: "John Doe", role: "Local Guide", review: "4.9/5 - Highly recommended for city tours!" },
    { name: "Sarah Lee", role: "Food Explorer", review: "4.8/5 - Best for food adventures!" },
    { name: "Mark Smith", role: "Adventure Guide", review: "4.7/5 - Thrilling experiences guaranteed!" },
    { name: "Emily Carter", role: "Historical Guide", review: "4.9/5 - Expert in historical landmarks!" },
    { name: "David Brown", role: "Cultural Guide", review: "4.8/5 - Learn about rich traditions!" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBooking = (guideName) => {
    setUserData((prevData) => ({
      ...prevData,
      selectedGuide: guideName,
    }));
    alert(`You have successfully booked ${guideName}!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.selectedGuide) {
      alert("Please fill in all fields and select a guide.");
      return;
    }
    alert(`Thank you, ${userData.name}! We'll contact you shortly about your booking with ${userData.selectedGuide}.`);
  };

  return (
    <div className="tour-guide-page">
      <header className="hero-section">
        <h1>Welcome to Our Tour Guide Functionality</h1>
        <p>Choose your perfect guide for an unforgettable experience!</p>
      </header>

      <div className="guide-list">
        {guides.map((guide, index) => (
          <div className="guide-box" key={index}>
            <h2>{guide.name}</h2>
            <p>{guide.role}</p>
            <p>{guide.review}</p>
            <button onClick={() => handleBooking(guide.name)}>Book Now</button>
          </div>
        ))}
      </div>

      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Booking Details</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Selected Guide:
          <input
            type="text"
            name="selectedGuide"
            value={userData.selectedGuide}
            readOnly
            placeholder="No guide selected yet"
          />
        </label>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default TourGuide;
