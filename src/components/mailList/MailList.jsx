import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./mailList.css";
import { useNavigate } from "react-router-dom"; // Correct hook for navigation

const MailList = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); // Correct hook for navigation

    const handleSubscribe = () => {
        if (email) {
            toast.success("Subscribed");
            // Add your logic to save the email, if needed
            console.log("Subscribed email:", email);
            navigate("/sign"); // Correct navigation syntax
        } else {
            toast.error("Please enter a valid email address.");
        }
    };

    return (
        <div className="mail">
            <ToastContainer position="bottom-right" />
            <h1 className="mailTitle">Save time, save money</h1>
            <span className="mailDesc">Sign up and we'll send offers worth a memorable trip!</span>
            <div className="mailInputContainer">
                <input
                    type="text"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="c" onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;
