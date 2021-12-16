import React from "react";
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer-section">
      <span className="footer-border"></span>
      <div className="footers container">
        <div className="footer-cards">
          <div className="footer-card">
            <h3>Contact Us</h3>
            <a href="/">Frequently Asked Question</a>
            <a href="/">Contacts, Branches, and ATM's</a>
            <a href="/">Book a consultation</a>
            <a href="/">About SwedBank</a>
            <div className="address">
              <p>
                Swedbank”, AB <br />
                Konstitucijos pr. 20A, 03502 Vilnius, Lithuania <br />
                SWIFT code: HABALT22 <br />
                Legal entity code: 112029651
              </p>
            </div>
          </div>
          <div className="footer-card none">
            <h3>Useful Links</h3>
            <a href="/">Sustainability</a>
            <a href="/">COVID-19</a>
            <a href="/">Online Banking</a>
            <a href="/">Prices and rates</a>
            <a href="/">Calculators</a>
            <a href="/">Correspondent Banks</a>
            <a href="/">Carrer</a>
          </div>
          <div className="footer-card none">
            <h3>Legal Information</h3>
            <a href="/">Terms and Conditions</a>
            <a href="/">User terms</a>
            <a href="/">Processing of Personal Data</a>
            <a href="/">Handling customer claims</a>
            <a href="/">Your rights when making payments in EU</a>
            <a href="/">Cookies</a>
            <a href="/">Deposit and liability insurance for investors</a>
            <a href="/">Payment Service Directive (PSD2)</a>
            <a href="/">Prevention of money laundering</a>
          </div>
          <div className="footer-card none">
            <h3>Customer programmes</h3>
            <a href="/">Swedbank’s Youth Programme</a>
            <a href="/">For parents of children and youth</a>
            <a href="/">For salary receivers</a>
            <a href="/">Golden Programme</a>
            <a href="/">Private Banking</a>
            <a href="/">Senior Programme</a>
            <a href="/">Become a business customer</a>
          </div>
        </div>
      </div>
    </div>
  );
}
