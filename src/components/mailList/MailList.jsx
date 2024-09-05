import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./mailList.css";

const MailList = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (email) {
            toast.success("Subscribed");
            // Here you can add the logic to save the email
            console.log("Subscribed email:", email);
        } else {
            toast.error("Please enter a valid email address.");
        }
    };

    return (
        <div className="mail">
            <ToastContainer position="bottom-right"/>
            <h1 className="mailTitle">Save time, save money</h1>
            <span className="mailDesc">Sign up and we'll send</span>
            <div className="mailInputContainer">
                <input
                    type="text"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;
