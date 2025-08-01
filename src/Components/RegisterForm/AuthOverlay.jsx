import React from "react";
import AuthContainer from "./AuthContainer";
import "./AuthOverlay.css"; // để viết CSS overlay

function AuthOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="btn btn-close float-end" onClick={onClose}></button>
        <AuthContainer />
      </div>
    </div>
  );
}

export default AuthOverlay;
