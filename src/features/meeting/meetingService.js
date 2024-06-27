import axios from "axios";

const API_URL = 'http://localhost:8080/meetings/';

const getAll = async () => {
    const res = await axios.get(API_URL + 'getall');
    return res.data;
};

const meetingService = {
    getAll,
};

export default meetingService;