import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="steps">
        <span className="active">01 Preliminary</span>
        <span className="active">02 Your Details</span>
        <span className="active">03 KYC</span>
        <span className="active">04 Parties</span>
        <span>05 Claim</span>
        <span>06 Review</span>
        <span>07 Payment</span>
      </div>
    </div>
  );
};

export default Header;
