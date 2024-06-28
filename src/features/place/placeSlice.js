import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import placeService from "./placeService";

const initialState = {
    places: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    place: null,
};

export const getAllPlaces = createAsyncThunk("place/getAllPlaces", async (_, thunkAPI) => {
  try {
    return await placeService.getAllPlaces();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const placeSlice = createSlice({
  name: "place",
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
      .addCase(getAllPlaces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPlaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.places = action.payload;
      })
      .addCase(getAllPlaces.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = placeSlice.actions;
export default placeSlice.reducer;
