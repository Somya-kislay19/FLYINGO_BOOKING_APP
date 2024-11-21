import React, { useState } from 'react';
import './Booking.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
const Booking1 = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { destination, date } = location.state || {};

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

    const handleBookNow = () => {
        navigate("/booking");
      };

    const handleBooking = () => {
        if (selectedSeats.length === 0) {
            toast.error("Please select at least one seat.");
        } else {
            navigate('/checkout', { state: { selectedSeats } });
        }
    };

    return (
        <div className="flight-details1">
            <ToastContainer position="bottom-right"/>
            <h1>Flight: AirXYZ123</h1>
            <p>Departure: {destination || "Delhi, India"}</p>
            <p>Arrival: Mumbai, India</p>
            <p>Date: {date ? `${format(date[0].startDate, "dd MMM yyyy")}` : "25th July 2024"}</p>
            
            <h2>Choose your seats</h2>
            <div className="seats1">
                {seats.map(seat => (
                    <div
                        key={seat}
                        className={`seat1 ${seat === 'gap' ? 'seat-gap1' : selectedSeats.includes(seat) ? 'selected1' : ''}`}
                        onClick={() => handleSeatSelection(seat)}
                    >
                        {seat !== 'gap' && seat}
                    </div>
                ))}
            </div>
            
            <div className="button-container">
    <button onClick={handleBooking}>Book Seats</button> <p>hi</p>
    <button onClick={handleBookNow}>Book In Advance</button>
</div>
        </div>
    );
};

export default Booking1;
