import axios from "axios";

const API_URL = 'https://www.samoo-elearningexperience.tech:8081/users/'; 

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

  const logout = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.delete(API_URL + "/logout", {
        headers: {
            Authorization: token,
        },
    });
    if (res.data) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
    return res.data;
};

const getUserById = async (userId) => {
  const token = localStorage.getItem('token');
  console.log('getUserById : ', userId);
  const res = await axios.get(API_URL + 'id/' + userId, {
    headers: {
      Authorization: token
    }
  })
  return res.data.user
};

const getUserContactInfoById = async (token, userId) => {
  const res = await axios.get(API_URL + 'id/' + userId, {
      headers: {
          Authorization: token
      }
  });
  return res.data;
};

const updateUser = async (userData) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem("user"))
  const res = await axios.put(API_URL + 'id/' + user._id, userData, {
      headers: {
          Authorization: token
      }
  });
  return res.data;
};
  export const getAllUser = async () => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (error) {
      console.error("Error fetching suppliers:", error);
      throw error;
    }
  };
  

const authService = {
    register,
    login,
    getUserById,
    getUserContactInfoById,
    updateUser,
    getAllUser,
    logout
  };
  
  export default authService;