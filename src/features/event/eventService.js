import axios from "axios";

const API_URL = "https://www.samoo-elearningexperience.tech:8081/events/";

const getAllEvents = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error al obtener eventos:", error);
    throw error;
  }
};

const updateEvent = async (eventId, eventData) => {
  console.log(eventData);
  try {
    const res = await axios.put(`${API_URL}id/${eventId}`, eventData);
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
    });
    return res.data;
  } catch (error) {
    console.error("Error al crear el evento:", error.message);
    throw error;
  }
};

const addUser = async (eventId, userId) => {
  try {
    const res = await axios.put(API_URL + "id/" + eventId);
    return res.data;
  } catch (error) {
    console.error("Error al añadir usuario al evento:", error.message);
    throw error;
  }
};

const removeEvent = () => {};

const eventService = {
  getAllEvents,
  updateEvent,
  createEvent,
  addUser,
};

export default eventService;
