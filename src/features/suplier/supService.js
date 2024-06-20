import axios from "axios";

const API_URL = "http://localhost:3000/supliers/";

const register = async (suplier) => {
  const res = await axios.post(API_URL, suplier);
  return res.data;
};

const supService = {
  register,
};

export default supService;
