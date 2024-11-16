import React, { useState } from "react";
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
import SignInRegisterModal from "./SignInRegisterModal";

const Navbarr = () => {
    const navigate = useNavigate();



   

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">F L Y I N G O</span>
                <div className="navItems">
                  
                </div>
            </div>
           
        </div>
    );
};

export default Navbarr;
