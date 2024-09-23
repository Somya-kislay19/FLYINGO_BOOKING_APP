import React, { useState } from 'react';
import './Call.css';

const Contact = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic (API call, etc.)
    console.log("Query submitted:", query);
  };

  return (
    <div className="contact-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-logo">FLYINGO</h1>
      </nav>

      {/* Contact Us Section */}
      <div className="contact-body">
        <h2>Contact Us</h2>
        <p>What's your query?</p>
        
        {/* Buttons for options */}
        <div className="contact-buttons">
          <button className="contact-option" onClick={() => setQuery('Want to know about flights')}>Want to know about flights</button>
          <button className="contact-option" onClick={() => setQuery('Know flight current location')}>Know flight current location</button>
          <button className="contact-option" onClick={() => setQuery('Still have a query? Call us')}>Still have a query? Call us</button>
        </div>

        {/* Placeholder for user input */}
        <textarea 
          className="query-input" 
          placeholder="Type your query here..." 
          value={query} 
          onChange={handleQueryChange}
        />

        {/* Submit button */}
        <button className="contact-submit" onClick={handleSubmit}>Submit Query</button>
        
        {/* Placeholder for AI-like chat box */}
        <div className="chat-box">
          <p>Need quick help? Chat with our AI assistant!</p>
          {/* Placeholder for future chat box feature */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
