import React from "react";
import "./index.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Process from "../../components/Process/Process";

function LoanProcessComponent() {
  return (
    <div>
      <Header />
      <div className="process-area container">
        <Process />
      </div>
      <Footer />
    </div>
  );
}

export default LoanProcessComponent;
