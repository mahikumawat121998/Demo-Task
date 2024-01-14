import React, { useState } from "react";
import axios from "axios";
import OtpInput from "react18-otp-input";
import "./otp.css";
import { useNavigate } from "react-router-dom";

function Otp(props) {
  const [states, setStates] = useState({
    otp: "",
    numInputs: 6,
    separator: "-",
    isDisabled: false,
    hasErrored: false,
    isInputNum: false,
    isInputSecure: false,
    minLength: 0,
    maxLength: 40,
    placeholder: "",

  });

  const handleOtpChange = (otp) => {
    setStates((prev) => ({ ...prev, otp }));
  };

  const handleChange = (e) => {
    setStates((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNumInputsChange = (e) => {
    let numInputs = e.target.value;
    const { minLength, maxLength } = states;

    if (numInputs < minLength || numInputs > maxLength) {
      numInputs = 6;

      console.error(
        `Please enter a value between ${minLength} and ${maxLength}`
      );
    }

    setStates((prev) => ({
      ...prev,
      [e.target.name]: parseInt(numInputs, 10),
    }));
  };

  const clearOtp = () => {
    setStates((prev) => ({ ...prev, otp: "" }));
  };

  const handleCheck = (e) => {
    const { name } = e.target;
    setStates((prev) => ({ ...prev, [name]: !prev[name] }));
  };
const navigate=useNavigate()
  const handleSubmit = async(e) => {
    const payload={
        "id":props.insertId,
        "otp_validation":states.otp}
    e.preventDefault();
    const res=axios.patch(`http://localhost:8800/api/auth/otp_authentication/${props.insertId}`,payload).then((res)=>{props.handleClose(false)
    navigate("/login")
}).catch((err)=>{
        console.log("some err has occurred")
    })
  };

  return (
    <div className="container">
      <div className="side-bar">
        <a
          href="https://github.com/mahdimhqq/react18-otp-input"
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
      <div className="view">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <p>Enter verification code</p>
            <div className="margin-top--small">
              <OtpInput
                inputStyle="inputStyle"
                numInputs={states.numInputs}
                isDisabled={states.isDisabled}
                hasErrored={states.hasErrored}
                errorStyle="error"
                onChange={handleOtpChange}
                separator={<span>{states.separator}</span>}
                isInputNum={states.isInputNum}
                isInputSecure={states.isInputSecure}
                shouldAutoFocus
                value={states.otp}
                placeholder={states.placeholder}
              />
            </div>
            <div className="btn-row">
              <button
                className="btn margin-top--large"
                type="button"
                disabled={states.isDisabled || states.otp.trim() === ""}
                onClick={clearOtp}
              >
                Clear
              </button>
              <button
                className="btn margin-top--large"
                disabled={states.otp.length < states.numInputs}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Otp;
