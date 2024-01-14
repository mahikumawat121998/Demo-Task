import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Otp from "../OTP/Otp";
const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    otp: false,
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => setOpen( false);
  const [insertId, setInsertId] = useState(null);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8800/api/auth/register", inputs)
        .then((res) => {
          console.log("res", res.data.data.insertId);
          setInsertId(res.data.data.insertId);
          setOpen(true);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      setErr(err.response.data);
    }
  };
  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Demo Project.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="phone"
              name="phone"
              onChange={handleChange}
            />
            <select name="business" onChange={handleChange}>
              <option value="2">Employee</option>
              <option value="2">Distributor</option>

              <option value="1">Retailer</option>
            </select>
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
      <div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Otp insertId={insertId} handleClose={handleClose} />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Register;
