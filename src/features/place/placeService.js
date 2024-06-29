import axios from "axios";

const API_URL = "http://localhost:8080/places/";

const getAllPlaces = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching places:", error);
    throw error;
  }
};

const createPlace = async (formData) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(API_URL, formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

const placeService = {
  getAllPlaces,
  createPlace,
};

export default placeService;
