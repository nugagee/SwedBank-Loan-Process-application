import React, { useState } from "react";
import { Button } from "antd";
import "../components/Process/process.css";

function PhoneInput({ prev, next }) {
  const [phone, setPhone] = useState();

  return (
    <div>
      <label className="labels" for="amount">
        *Enter Phone No:
      </label>
      <br />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="inputs"
        type="number"
        required
      />
      <br />
      <br />
      <div className="btn-section">
        <Button type="primary" onClick={prev}>
          Prev
        </Button>
        <Button disabled={!phone} type="primary" onClick={() => next(phone)}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default PhoneInput;
