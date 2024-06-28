import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import meetingService from "./meetingService";

const initialState = {
    meetings: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
};

export const meetingSlice = createSlice({
    name: "meeting",
    initialState,
    reducers: {
        reset: (state) => {
            (state.isError = false), (state.isSuccess = false), (state.message = '');
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAll.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAll.fulfilled, (state, action) => {
            state.meetings = action.payload;
            state.isSuccess = true;
        })
        .addCase(getAll.rejected, (state, action) => {
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const getAll = createAsyncThunk("meeting/getAll", async () => {
    try {
        const res = await meetingService.getAll();
        return res;
    } catch (error) {
        console.error(error);
    }
});

export const { reste } = meetingSlice.actions;
export default meetingSlice.reducer;