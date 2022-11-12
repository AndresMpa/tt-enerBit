import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import config from "../config.json"

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

    if (data.username === config.USERNAME && data.password === config.PASSWORD) {
      localStorage.setItem("auth", data)
      navigate("/inventory");
    }else {
      Swal.fire({
        title: 'Ups...',
        text: 'Those credentials are not registered',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
    }
  };
  return (
    <div className="box">
      <form action="/" className="box" ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="input"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
