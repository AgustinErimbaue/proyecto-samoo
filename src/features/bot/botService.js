import axios from "axios";

const API_URL = "https://chatbot-80tb.onrender.com/chatbot";


const speakWithBot = async (formData) => {
  const res = await axios.post(API_URL, formData);
    return res.data;
}

const botService = {
  speakWithBot,
};

export default botService;
