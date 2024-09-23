import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';
import Navbar from '../navbar/Navbar';

const CheckoutPage = () => {
    const location = useLocation();
    const { selectedSeats } = location.state || {};

    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};

    const generateBill = () => {
        return selectedSeats ? selectedSeats.map(seat => ({
            seat,
            price: (Math.random() * 1000).toFixed(2)
        })) : [];
    };

    const billDetails = generateBill();
    const totalAmount = billDetails.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);

    const navigate = useNavigate();

    const pay = () => {
        navigate("/payment", { state: { selectedSeats, totalAmount } });
    };

    return (
        <div className='checkout-container'>
            <Navbar />
            <div className="checkout-sidebar">
                <ul>
                    <li>Register for Visa</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="checkout-content">
                <h1>Checkout</h1>
                <h2>Selected Seats:</h2>
                <ul>
                    {billDetails.map(item => (
                        <li key={item.seat}>{item.seat}: Rs.{item.price}</li>
                    ))}
                </ul>
                <h2>Total Amount: Rs.{totalAmount}</h2>
                <h2>User Details:</h2>
                <div className="user-details">
                    <p>Name: {userDetails.name}</p>
                    <p>Passport Number: {userDetails.passport}</p>
                    <p>Flight Preference: {userDetails.flight}</p>
                </div>
                <button onClick={pay}>Proceed to Payment</button>
            </div>
        </div>
    );
};

export default CheckoutPage;
