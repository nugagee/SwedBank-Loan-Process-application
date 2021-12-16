import React, { useState } from "react";
import "../components/Process/process.css";
import { Button } from "antd";
import Expire from "../components/Expire";

function LoanTypeInput({loanTypeError, next }) {
  const [loanType, setLoanType] = useState();

 
  return (
    <div>
      <Expire delay={5000}>
        {!loanType ? (
          <p style={{ color: "red", textAlign: "center" }}>{loanTypeError}</p>
        ) : (
          ""
        )}
      </Expire>
      <label className="labels" for="gender">
        *Select loan type
      </label>
      <br />
      <select
        value={loanType}
        name="loanType"
        onChange={(e) => setLoanType(e.target.value)}
      >
        <option value="none" selected>
          Select Type
        </option>
        <option value="Long Term">Long Term</option>
        <option value="Short Term">Short Term</option>
        <option value="other">other</option>
      </select>
      <br />
      <br />
      <br />
      <div className="btn-section">
        <Button 
        type="primary" onClick={() => next(loanType)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default LoanTypeInput;
