import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import botService from "./botService";

const initialState = {
    botAnswer:"",
};

export const speakWithBot = createAsyncThunk("boot/speak", async ( formData) => {
  try {
    return botService.speakWithBot(formData);
  } catch (error) {
    console.error(error);
  }
})

const botSlice = createSlice({
  name: "bot",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.botAnswer = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(speakWithBot.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(speakWithBot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.botAnswer = action.payload.response;
      })
  },
});

export const { reset } = botSlice.actions;
export default botSlice.reducer;
