// /src/pages/LoginPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authService.login(formData.email, formData.password);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (formData.password.length < 6) {
  //     return toast.error("Password must be at least 6 characters.");
  //   }

  //   try {
  //     const data = await loginUser(formData);
  //     localStorage.setItem("token", data.token);
  //     toast.success("Login successful!");
  //     navigate("/");
  //   } catch (err) {
  //     toast.error(err.response?.data?.message || "Login failed");
  //   }
  // };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-lg border-0 p-4">
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Welcome Back 👋</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-2">
                Login
              </button>
            </form>

            <p className="mt-3 mb-0 text-center">
              Don't have an account?{" "}
              <a href="/register" className="text-decoration-none">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
