import React, { useState } from "react";
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
import SignInRegisterModal from "./SignInRegisterModal";

const Navbar = () => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("login");

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const log = () => {
        navigate("/create");
    };

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">F L Y I N G O</span>
                <div className="navItems">
                    <button className="navButton" onClick={() => openModal("register")}>Register</button>
                    <button className="navButton" onClick={() => openModal("login")}>Login</button>
                    <button className="navButton" onClick={log}>CREATE</button>
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
