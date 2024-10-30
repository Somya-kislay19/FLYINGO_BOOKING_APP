import React from 'react';
import { useNavigate } from 'react-router-dom';
import './C.css';

const C = () => {
    const navigate = useNavigate();

    return (
        <div className="confirmation-page">
            <div className="confirmation-container">
                <h1>Rooms Confirmed!</h1>
                <p>Thank you for booking with us. Your stay has been successfully confirmed.</p>
                <p className="tagline">Always with you, Thanks</p>
                <button className="back-home-button" onClick={() => navigate('/')}>
                    <i className="fas fa-home"></i> Back to Home
                </button>
              
            </div>
        </div>
    );
};

export default C;
