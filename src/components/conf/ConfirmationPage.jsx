import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
    const navigate = useNavigate();
    const documentUrl = 'https://www.shiksha.com/studyabroad/calculate-percentage-to-cgpa-articlepage-146711#:~:text=To%20convert%20CGPA%20to%20percentage%2C%20multiply%20your%20CGPA%20by%209.5,of%20the%20traditional%20percentage%20scale.';

    return (
        <div className="confirmation-page">
            <div className="confirmation-container">
                <h1>Flight Confirmed!</h1>
                <p>Thank you for booking with us. Your flight has been successfully confirmed.</p>
                <p className="tagline">Always with you, Thanks</p>
                <button className="back-home-button" onClick={() => navigate('/')}>
                    <i className="fas fa-home"></i> Back to Home
                </button>
              
            </div>
        </div>
    );
};

export default ConfirmationPage;
