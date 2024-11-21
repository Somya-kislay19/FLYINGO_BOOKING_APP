import React from "react";
import "./VirtualTour.css";

const VirtualTour = () => {
  return (
    <div className="virtual-tour-page">
      <header className="tour-header">
        <h1>Welcome to Your Virtual Flight Tour</h1>
        <p>Explore the flight you will be booking!</p>
      </header>

      <div className="gallery">
        <div className="image-card">
          <img
            src={require('./leg.jpg')}
            alt="Comfortable Legroom Section"
          />
          <p>Comfortable Legroom Section</p>
        </div>
        <div className="image-card">
          <img
            src={require('./window.jpg')}
            alt="Scenic Window Views"
          />
          <p>Scenic Window Views</p>
        </div>
        <div className="image-card">
          <img
            src={require('./canin.jpg')}
            alt="Modern Cabin Interior"
          />
          <p>Modern Cabin Interior</p>
        </div>
        <div className="image-card">
          <img
            src={require('./food.jpg')}
            alt="Delicious In-Flight Meals"
          />
          <p>Delicious In-Flight Meals</p>
        </div>
        <div className="image-card">
          <img
            src={require('./service.jpg')}
            alt="Friendly Cabin Crew Service"
          />
          <p>Friendly Cabin Crew Service</p>
        </div>
        <div className="image-card">
          <img
            src={require('./movie.jpg')}
            alt="Onboard Entertainment Options"
          />
          <p>Onboard Entertainment Options</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
