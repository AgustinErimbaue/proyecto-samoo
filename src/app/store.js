import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import sup from "../features/suplier/supSlice";
import place from "../features/place/placeSlice";
import meeting from "../features/meeting/meetingSlice";
import event from "../features/event/eventSlice";


export const store = configureStore({
  reducer: {
    auth,
    sup,
    place,
    meeting,
    event,
  },
});
