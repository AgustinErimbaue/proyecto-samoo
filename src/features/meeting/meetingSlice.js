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
        })
        .addCase(createMeeting.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createMeeting.fulfilled, (state, action) => {
            state.meetings.push(action.payload);
            state.isSuccess = true;
        })
        .addCase(createMeeting.rejected, (state, action) => {
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(bookMeeting.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(bookMeeting.fulfilled, (state, action) => {
            const index = state.meetings.findIndex(meeting => meeting._id === action.payload._id);
            if (index !== -1) {
                state.meetings[index] = action.payload;
            }
            state.isSuccess = true;
        })
        .addCase(bookMeeting.rejected, (state, action) => {
            state.isError = true;
            state.message = action.payload;
        });;
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

export const createMeeting = createAsyncThunk("meeting/createMeeting", async ({meeting, token}) => {
    try {
        return meetingService.createMeeting(meeting, token)
    } catch (error) {
        console.error(error);
    }
});

export const bookMeeting = createAsyncThunk("meeting/bookingmeeting", async ({meetingId, token}) => {
    try {
        return meetingService.bookMeeting(meetingId, token)
    } catch (error) {
        console.error(error);
    }
})

export const { reste } = meetingSlice.actions;
export default meetingSlice.reducer;