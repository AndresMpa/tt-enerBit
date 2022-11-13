import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import config from "../config.json";

const Login = () => {
  const navigate = useNavigate();
  const form = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    if (
      data.username === config.USERNAME &&
      data.password === config.PASSWORD
    ) {
      localStorage.setItem("auth", JSON.stringify(data.username));
      navigate("/inventory");
    } else {
      Swal.fire({
        title: "Ups...",
        text: "Those credentials are not registered",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };
  return (
    <div className="login">
      <div className="login--container">
        <h2>Login</h2>
      </div>

      <form
        action="/"
        className="box login--container login--form"
        ref={form}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          className="input login--input"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          className="input login--input"
          placeholder="Password"
        />
        <button className="button login--button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
