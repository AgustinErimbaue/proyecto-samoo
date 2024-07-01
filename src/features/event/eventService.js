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
    const res = await axios.put(`${API_URL}${event._id}`, event);
    return res.data;
  } catch (error) {
    console.error("Error al actualizar el evento:", error.message);
    throw error;
  }
};

const createEvent = async (eventData) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.post(API_URL, eventData, {
      headers: {
        Authorization: token,
      },
    })
    return res.data;
  } catch (error) {
    console.error("Error al crear el evento:", error.message);
    throw error;
  }
};

const eventService = {
  getAllEvents,
  updateEvent,
  createEvent,
};

export default eventService;
