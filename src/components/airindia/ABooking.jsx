import React, { useState, useEffect } from 'react';
import './ABooking.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Abooking = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const details = JSON.parse(localStorage.getItem('userDetails'));
        if (details) {
            setUserDetails(details);
        }
    }, []);

    const seats = [
        '1A', '1B', '1C', 'gap', '1D', '1E', '1F',
        '2A', '2B', '2C', 'gap', '2D', '2E', '2F',
        '3A', '3B', '3C', 'gap', '3D', '3E', '3F',
        '4A', '4B', '4C', 'gap', '4D', '4E', '4F',
        '5A', '5B', '5C', 'gap', '5D', '5E', '5F',
    ];

    const handleSeatSelection = (seat) => {
        if (seat !== 'gap') {
            setSelectedSeats(prevSelectedSeats =>
                prevSelectedSeats.includes(seat)
                    ? prevSelectedSeats.filter(s => s !== seat)
                    : [...prevSelectedSeats, seat]
            );
        }
    };

    const handleBooking = () => {
        if (selectedSeats.length === 0) {
            toast.error("Please select at least one seat.");
        } else {
            navigate('/visaex', { state: { selectedSeats } });
        }
    };

    return (
        <div className='l'>
            <Navbar/>
        <div className="flight-details">
            <ToastContainer position="bottom-right"/>
          
            <h2>Choose your seats</h2>
            <div className="seats">
                {seats.map(seat => (
                    <div
                        key={seat}
                        className={`seat ${seat === 'gap' ? 'seat-gap' : selectedSeats.includes(seat) ? 'selected' : ''}`}
                        onClick={() => handleSeatSelection(seat)}
                    >
                        {seat !== 'gap' && seat}
                    </div>
                ))}
            </div>
            
            <button onClick={handleBooking}>Book Seats</button>
        </div>
        </div>
    );
};

export default Abooking;
