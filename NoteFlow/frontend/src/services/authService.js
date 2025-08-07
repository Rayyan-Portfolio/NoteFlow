import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/users"; // base only once

const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/login/`, {
    email,
    password,
  });

  // Save token for future use
  localStorage.setItem("token", response.data.access);
  return response.data;
};

const register = async (username, email, password, password2) => {
  const response = await axios.post(`${API_BASE_URL}/register/`, {
    username,
    email,
    password,
    password2,
  });

  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
