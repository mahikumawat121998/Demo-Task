import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.scss";
const Login = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    let res = axios
      .post("http://localhost:8800/api/auth/login", inputs)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log("Some err has occurred" + err));
  };
  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Hello World.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              cum, alias totam numquam ipsa exercitationem dignissimos, error
              nam, consequatur.
            </p>
            <span>Don't you have an account?</span>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="phone"
                name="phone"
                onChange={handleChange}
              />

              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
