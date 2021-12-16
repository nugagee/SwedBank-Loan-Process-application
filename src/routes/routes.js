import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoanProcessComponent from "../views/LoanProcess/index";
import HomeComponent from "../views/Home/Home";

const AllPages = () => (
  <Router>
    <Routes>
      <Route path="/loan-process" element={<LoanProcessComponent />} />
      <Route path="/" element={<HomeComponent />} />
    </Routes>
  </Router>
);

export default AllPages;
