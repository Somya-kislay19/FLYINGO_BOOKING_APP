import React from 'react';
import './Intro.css';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate(); // Move this line up here

  const book = () => {
    navigate("/gotovisa"); // Correctly call navigate
  };

  return (
    <div className="intro-container">
      <section className="intro-section">
        <h1>Welcome to Flyingo</h1>
        <p>
          Flyingo is your ultimate flight booking solution, offering a seamless and user-friendly interface to book flights with ease. Our platform ensures you get the best deals and an enjoyable booking experience.
        </p>
      </section>
      <section className="flights-section">
        <h2>Flights We Provide</h2>
        <div className="airline1">
          <h3>Airline 1</h3>
          <p>Description of Airline 1.</p>

        </div>
        <div className="airline2">
          <h3>Airline 2</h3>
          <p>Description of Airline 2.</p>
        </div>
        <div className="airline3">
          <h3>Airline 3</h3>
          <p>Description of Airline 3.</p>
        </div>
        <div className="airline4">
          <h3>Airline 4</h3>
          <p>Description of Airline 4.</p>
        </div>
        <button className="book" onClick={book}>Book Now</button>
      </section>
    </div>
  );
};

export default Intro;