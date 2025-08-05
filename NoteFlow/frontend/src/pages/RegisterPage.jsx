// /src/pages/RegisterPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 💡 Simple Validation
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      return toast.error("Please enter a valid email address.");
    }
    if (formData.password.length < 6) {
      return toast.error("Password must be at least 6 characters.");
    }
    if (formData.password !== formData.password2) {
      return toast.error("Passwords do not match.");
    }
    if (formData.username.length < 3) {
      return toast.error("Username must be at least 3 characters.");
    }
    try {
      await authService.register(
        formData.username,
        formData.email,
        formData.password,
        formData.password2
      );
      toast.success("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-lg border-0 p-4">
          <div className="card-body">
            <h3 className="card-title text-center mb-4">
              Create an Account 📝
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
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
                  placeholder="Create a strong password"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  name="password2"
                  type="password"
                  className="form-control"
                  value={formData.password2}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-2">
                Register
              </button>
            </form>

            <p className="mt-3 mb-0 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-decoration-none">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
