import React, { useState } from "react";
import { Button } from "antd";

import "../components/Process/process.css";

function PersonalInput({ next, prev }) {
  const [fullName, setFullName] = useState();

  return (
    <div>
      <label className="labels" for="amount">
        *Enter Full Name:
      </label>
      <br />
      <input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
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
        <Button
          disabled={!fullName}
          type="primary"
          onClick={() => next(fullName)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default PersonalInput;
