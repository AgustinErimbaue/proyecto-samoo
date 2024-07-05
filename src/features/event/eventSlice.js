import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
  events: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getAllEvents = createAsyncThunk("event/getAllEvents", async () => {
  try {
      console.log('getAllEvents')
    return await eventService.getAllEvents();
  } catch (error) {
    console.error("Error al obtener eventos:", error.message);
    throw error;
  }
});

export const updateEvent = createAsyncThunk(
  "event/updateEvent",
  async ({ eventId, eventData }) => {
    try {
      console.log(eventData);
      return await eventService.updateEvent(eventId, eventData);
    } catch (error) {
      console.error("Error al actualizar el evento:", error.message);
      throw error;
    }
  }
);

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (eventData) => {
    try {
      return await eventService.createEvent(eventData);
    } catch (error) {
      console.error("Error al crear el evento:", error.message);
      throw error;
    }
  }
);

export const addUser = createAsyncThunk(
  "event/addUser",
  async ({ eventId }) => {
    try {
      return await eventService.addUser(eventId);
    } catch (error) {
      console.error("Error al añadir usuario al evento:", error.message);
      throw error;
    }
  }
);

export const removeUserFromEvent = createAsyncThunk(
  "event/removeUser",
  async ({ eventId }) => {
    try {
      return await eventService.removeUserFromEvent(eventId);
    } catch (error) {
      console.error("Error al eliminar usuario del evento:", error.message);
      throw error;
    }
  }
);

export const removeEvent = createAsyncThunk(
  "event/removeEvent",
  async (eventId) => {
    try {
      return await eventService.removeEvent(eventId);
    } catch (error) {
      console.error("Error al eliminar el evento:", error.message);
      throw error;
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = action.payload;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updateEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        );
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events.push(action.payload);
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || action.error.message;
      })
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        );
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(removeEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = state.events.filter(
          (event) => event._id !== action.payload._id
        );
      })
      .addCase(removeEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(removeUserFromEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeUserFromEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        );
      })
      .addCase(removeUserFromEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      });
  },
});

export const { reset } = eventSlice.actions;
export default eventSlice.reducer;
