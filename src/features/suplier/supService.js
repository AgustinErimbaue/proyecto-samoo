import axios from "axios";

const API_URL = "https://www.samoo-elearningexperience.tech:8081/suppliers/";

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

export const getAllSuppliers = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    throw error;
  }
};

const supService = {
  register,
  login,
  getAllSuppliers,
};

export default supService;
