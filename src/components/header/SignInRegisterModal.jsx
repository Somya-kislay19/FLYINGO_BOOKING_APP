import React, { useState } from "react";
import Modal from "react-modal";
import "./signInRegisterModal.css"; // Add your CSS here

Modal.setAppElement('#root');

const SignInRegisterModal = ({ isOpen, onRequestClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sign In / Register"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modalContent">
        <div className="modalHeader">
          <button className={isSignIn ? "active" : ""} onClick={() => setIsSignIn(true)}>
            Login
          </button>
          <button className={!isSignIn ? "active" : ""} onClick={() => setIsSignIn(false)}>
            Register
          </button>
        </div>
        <h2>{isSignIn ? "Login" : "Register"}</h2>
        <form>
          {!isSignIn && (
            <div>
              <label>Username</label>
              <input type="text" name="username" required />
            </div>
          )}
          <div>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">{isSignIn ? "Login" : "Register"}</button>
        </form>
        <button onClick={toggleForm}>
          {isSignIn ? "Don't have an account? Register here" : "Already have an account? Login here"}
        </button>
      </div>
    </Modal>
  );
};

export default SignInRegisterModal;
