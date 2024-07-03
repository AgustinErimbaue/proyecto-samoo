import axios from "axios";

const API_URL = 'http://localhost:8080/meetings/';

const getAll = async () => {
    const res = await axios.get(API_URL + 'getall');
    return res.data;
};

const createMeeting = async (meeting) => {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.post(API_URL, meeting, {
            headers: {
                Authorization: token
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

const bookMeeting = async (meetingId) => {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.put(API_URL + 'bookingmeeting/' + meetingId, {}, {
            headers: {
                Authorization: token
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

const meetingService = {
    getAll,
    createMeeting,
    bookMeeting,
};

export default meetingService;