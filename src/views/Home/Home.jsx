import React from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="content-area container">
        <h2>Small Loan Application</h2>
        <span>Welcome.</span>
        <p>
          There are some few informations needed to be completed to begin your
          loan application process
        </p>
        <p>
          Click the <strong>proceed</strong> button to continue.
        </p>
        <button>
          <a href="/loan-process">Proceed</a>
        </button>
      </div>
      <Footer />
    </div>
  );
}
