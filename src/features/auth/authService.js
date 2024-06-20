import axios from "axios";

const API_URL = 'http://localhost:3000/users/';

const register = async (user) => {
    const res = await axios.post(API_URL, user);
    return res.data;
};

const authService = {
    register,
  };
  
  export default authService;