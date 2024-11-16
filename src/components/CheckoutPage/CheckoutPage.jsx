import React from "react";
import "./CheckoutPage.css";

const Checkout = ({ userDetails }) => {
  if (!userDetails || !userDetails.name || !userDetails.email || !userDetails.phone) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Error</h1>
        <p>User details are missing. Please go back and provide the required information.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <div className="details-section">
        <h2>Your Details</h2>
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Phone:</strong> {userDetails.phone}</p>
      </div>
      <div className="confirm-section">
        <button className="confirm-button">Confirm Booking</button>
      </div>
    </div>
  );
};

export default Checkout;
