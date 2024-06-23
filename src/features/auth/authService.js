import axios from "axios";

const API_URL = 'http://localhost:8080/users/';

const register = async (user) => {
    const res = await axios.post(API_URL, user);
    return res.data;
};

const login = async (user) => {
    console.log('estoy en el login')
    const res = await axios.post(API_URL + 'login', user);
    if(res.data){
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.token);
    }
    return res.data
  };

const getUserById = async (token, userId) => {
  const res = await axios.get(API_URL + 'id/' + userId, {
    headers: {
      Authorization: token
    }
  })
  return res.data
};

const getUserContactInfoById = async (token, userId) => {
  const res = await axios.get(API_URL + 'id/' + userId, {
      headers: {
          Authorization: token
      }
  });
  return res.data;
};

const authService = {
    register,
    login,
    getUserById,
    getUserContactInfoById,
  };
  
  export default authService;