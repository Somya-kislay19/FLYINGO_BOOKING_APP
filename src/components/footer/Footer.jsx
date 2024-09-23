import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="mailto:support@flyingo.com">Email</a>
                </div>
                <p className="copyright">All rights reserved © Somya</p>
            </div>
        </footer>
    );
};

export default Footer;
