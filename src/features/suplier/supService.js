import axios from "axios";

const API_URL = "http://localhost:8080/supliers/";

const register = async (suplier) => {
  const res = await axios.post(API_URL, suplier);
  return res.data;
};

export const login = async (suplier) => {
  const res = await axios.post(API_URL + "login", suplier);
  if (res.data) {
    localStorage.setItem("suplier", JSON.stringify(res.data.suplier));
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

const supService = {
  register,
  login,
};

export default supService;
