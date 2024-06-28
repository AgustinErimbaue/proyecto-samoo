import axios from "axios";


const API_URL = "http://localhost:8080/events/";


const getAllEvents = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error al obtener eventos:", error);
    throw error;
  }
};


const eventService = {
  getAllEvents,
};

export default eventService;
