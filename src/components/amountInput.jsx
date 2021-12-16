import React, { useState } from "react";
import { Button } from "antd";
import "../components/Process/process.css";

function AmountInput({ next, prev }) {
  const [amount, setAmount] = useState();

  return (
    <div>
      <label className="labels" for="amount">
        Enter Amount
      </label>
      <br />
      <p
        style={{
          color: "#F45B1C",
          fontSize: "1.2rem",
          fontWeight: "700",
          display: "inline-block",
        }}
      >
        &pound;
      </p>{" "}
      {""}
      {""}
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="inputs"
        type="text"
        required
      />
      <br />
      <br />
      <div className="btn-section">
        <Button type="primary" onClick={prev}>
          Prev
        </Button>
        <Button disabled={!amount} type="primary" onClick={() => next(amount)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default AmountInput;
