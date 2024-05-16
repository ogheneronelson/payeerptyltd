import axios from "axios";

const API_URL_1 = process.env.REACT_APP_BASE_URI + `/auth/signup`;
const API_URL_2 = process.env.REACT_APP_BASE_URI + `/auth/signin`;
const API_URL_3 = process.env.REACT_APP_BASE_URI + `/auth/forgot-password`;

const register = async (userData) => {
  const response = await axios.post(API_URL_1, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL_2, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const forgotPassword = async (userData) => {
  const response = await axios.post(API_URL_3, userData);
  return response.data;
};

const userService = {
  register,
  logout,
  login,
  forgotPassword,
};

export default userService;
