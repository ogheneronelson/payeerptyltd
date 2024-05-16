import axios from "axios";

const API_URL_1 = process.env.REACT_APP_BASE_URI + `/admin/signup`;
const API_URL_2 = process.env.REACT_APP_BASE_URI + `/admin/signin`;


const register = async (adminData) => {
  const response = await axios.post(API_URL_1, adminData);
  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (adminData) => {
  const response = await axios.post(API_URL_2, adminData);
  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("admin");
};


const adminService = {
  register,
  logout,
  login,
};

export default adminService;
