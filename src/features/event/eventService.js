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

const updateEvent = async (event) => {
  try {
    const res = await axios.put(`${API_URL}id/${event._id}`, event);
    return res.data;
  } catch (error) {
    console.error("Error al actualizar el evento:", error.message);
    throw error;
  }
};


const eventService = {
  getAllEvents,
  updateEvent,
};

export default eventService;
