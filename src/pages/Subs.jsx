import React, { useState } from 'react';
import './Subscribe.css'; 

const Subscribe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("User Subscribed:", { name, email });
    setName('');
    setEmail('');
    alert("Thank you for subscribing!");
  };

  return (
    <div className="subscribe-card">
      <h2 className="subscribe-title">Subscribe to Our Website</h2>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="subscribe-input"
          required
        />
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="subscribe-input"
          required
        />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
