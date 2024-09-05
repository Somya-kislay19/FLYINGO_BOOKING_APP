import React, { useState } from "react";
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

import SignInRegisterModal from "./SignInRegisterModal"; // Import the modal component

const Navbar = () => {

    const navigate = useNavigate(); // Move this line up here

  const log = () => {
    navigate("/create"); // Correctly call navigate
  }
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [modalContent, setModalContent] = useState("login"); // State for modal content

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">F L Y I N G O</span>
                <div className="navItems">
                    <button className="navButton" onClick={() => openModal("register")}>Register</button>
                    
                    <button className="navButton" onClick={() => openModal("login")}>Login</button>
                    <button className="Login" onClick={log}>CREATE


                    </button>
                </div>
            </div>
            <SignInRegisterModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                content={modalContent}
            />
        </div>
    );
};

export default Navbar;
