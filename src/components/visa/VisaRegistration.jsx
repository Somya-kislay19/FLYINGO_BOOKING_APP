import React from 'react';
import './VisaRegistration.css';

const VisaRegistration = () => {
  const openVisaLink = () => {
    window.open('https://www.indianvisaonline.gov.in/', '_blank', 'fullscreen=yes');
  };

  return (
    <div className="visa-container">
      <h1>Visa Registration</h1>
      <p>To apply for a visa, click the button below to visit the official government visa application page.</p>
      <button className="visa-btn" onClick={openVisaLink}>Apply for Visa</button>
    </div>
  );
};

export default VisaRegistration;
