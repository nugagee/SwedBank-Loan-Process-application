import React from "react";
import "./header.css";
import Logo from "../../assets/swedbank-logo.svg";

export default function Header() {
  return (
    <div className="header">
      <span className="top-border"></span>
      <div className="header-logo-section container">
        <div className="logo-section">
          <div className="logo">
            <img src={Logo} alt="logo" />
            {/* Logo */}
            <div className="logo-icon private">
              <p>Private</p>
              <i className="fa fa-angle-down" />
            </div>
          </div>
        </div>
        <div className="language-section">
          <div className="logo-icon">
            <p>EN</p>
            <i className="fa fa-angle-down" />
          </div>
          <div className="logo-icon cust">
            <p>Become a customer</p>
          </div>
          <div className="logo-icon">
            <i className="fa fa-sign-out" />
            <p>Log In</p>
          </div>
        </div>
      </div>
      <span className="line" />
      <div className="header-nav container">
        <span>
          <i className="fa fa-home" />
        </span>
        <span>Everyday Banking</span>
        <span>Cards</span>
        <span className="active">Loan, Leasing</span>
        <span>Savings, Investment</span>
        <span>Pension</span>
        <span>Insurance</span>
        <span>
          <i className="fa fa-search" />
        </span>
      </div>
      <div className="header-menu">
        <div className="menu container">
          <a href="/">Home{""} &gt;</a>
          <a href="/">Loan, Leasing{""} &gt;</a>
          <a href="/">Small Loan</a>
        </div>
      </div>
    </div>
  );
}
