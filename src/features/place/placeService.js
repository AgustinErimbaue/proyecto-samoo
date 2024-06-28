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

const placeService = {
  getAllPlaces,
};

export default placeService;
