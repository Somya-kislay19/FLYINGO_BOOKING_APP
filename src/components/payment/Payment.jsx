import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './Payment.css';
import Navbar from '../navbar/Navbar';
import Navbarr from '../navbar/Navbar copy';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const submit = () => {
        navigate("/confirmation");
    };

    const { selectedSeats, totalAmount } = location.state || {};

    const qrLink = 'https://docs.google.com/forms/d/e/1FAIpQLSez_8-qTAyvBtoEK9o1McrgotW5Nx9ZFNnSjJ2EvCA2t3COUw/viewform?usp=sf_link';
    const qrMessage = `Payment Successful! Check your document here: ${qrLink}`;

    return (
        <div className='payment-container'>
            <Navbarr />
            <div className="payment-header">
                <h1>Payment</h1>
                <p>Securely complete your payment for the selected services</p>
            </div>

            <div className="payment-content">
               

                <div className="bank-details">
                    <h2>Bank Details</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="accountNumber">Account Number</label>
                            <input type="text" id="accountNumber" name="accountNumber" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountHolder">Account Holder's Name</label>
                            <input type="text" id="accountHolder" name="accountHolder" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bankName">Bank Name</label>
                            <input type="text" id="bankName" name="bankName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="district">District</label>
                            <input type="text" id="district" name="district" required />
                        </div>
                        <button type="button" className="submit-button" onClick={submit}>
                            Submit Payment
                        </button>
                    </form>
                </div>

                <div className="qr-section">
                    <h2>Scan QR Code</h2>
                    <p>Or scan this QR code for payment confirmation</p>
                    <QRCode value={qrMessage} size={200} level={'H'} includeMargin={true} />
                </div>

                <button className='confirm-button' onClick={() => navigate('/confirmation')}>
                    Proceed to Confirmation
                </button>
            </div>
        </div>
    );
};

export default Payment;
