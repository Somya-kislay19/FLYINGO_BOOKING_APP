import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './Payment.css';
import Navbar from '../navbar/Navbar'; 

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const submit = () => {
        navigate("/confirmation"); 
      };


    const { selectedSeats, totalAmount } = location.state || {};

    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};

    const qrLink = 'https://docs.google.com/forms/d/e/1FAIpQLSez_8-qTAyvBtoEK9o1McrgotW5Nx9ZFNnSjJ2EvCA2t3COUw/viewform?usp=sf_link';  
    const qrMessage = `Payment Successful! Check your document here: ${qrLink}`;

    return (
        <div className='payment-container'>
            <Navbar /> 
            <div className="checkout-sidebar">
                <ul>
                    <li>Register for Visa</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="checkout-pagep">
                <h1>Payment</h1>
                <ul>
                    {selectedSeats && selectedSeats.map(seat => (
                        <li key={seat}>
                            <span className="seat-label">Selected seat:</span>
                            <span className="seat-number">{seat}</span>
                        </li>
                    ))}
                </ul>
               

                <div className="bank-details">
                    <h2>Bank Details</h2>
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="accountNumber">Account Number:</label></td>
                                    <td><input type="text" id="accountNumber" name="accountNumber" required /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="accountHolder">Name of Account Holder:</label></td>
                                    <td><input type="text" id="accountHolder" name="accountHolder" required /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="bankName">Bank Name:</label></td>
                                    <td><input type="text" id="bankName" name="bankName" required /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="district">District:</label></td>
                                    <td><input type="text" id="district" name="district" required /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'center' }}>
                                        <button type="submit" className="submit-button" onClick={submit}>Submit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

                <h2>Or Scan this QR code to view your payment confirmation:</h2>
                <div className="qr-container">
                    <QRCode
                        value={qrMessage}
                        size={256}
                        level={'H'}
                        includeMargin={true}
                    />
                </div>
                <button className='bcf' onClick={() => navigate('/confirmation')}>Proceed to Confirmation</button>
            </div>
        </div>
    );
};

export default Payment;
